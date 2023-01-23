import { useRouter } from 'next/router';
import ExpertSkeleton from '@/src/components/atoms/ExpertSkeleton';
import { ChangeableQueryParams } from '@/src/api/experts';
import { ROUTES } from '@/src/constants/routes';
import { validateQueryParam } from '@/src/utils/validateQueryParam';
import Pagination from '@/src/components/organisms/Pagination';
import ExpertPanel from '@/src/components/organisms/ExpertPanel';
import { EXPERTS_PER_PAGE } from '@/src/constants/api';
import useExperts from '@/src/hooks/useExperts';
import styles from './styles.module.scss';

interface IProps {
  fallbackData: Expert.GetListResponse;
}

function ExpertsList({ fallbackData }: IProps) {
  const router = useRouter();

  const page = validateQueryParam(router.query._page) || '1';
  const limit = validateQueryParam(router.query._limit) || `${EXPERTS_PER_PAGE}`;

  const changePage = (page: number) => {
    const queryParams: ChangeableQueryParams = {
      _page: `${page}`,
      _limit: limit
    };

    const url = { pathname: ROUTES.experts, query: queryParams };

    router.push(url, url, { shallow: true });
  };

  const {
    experts,
    total,
    expertsAreLoading,
    expertsHaveError
  } = useExperts(page, fallbackData, limit);

  return (
    <>
      <p className={styles.expertsSubtitle}>{total} advisors available</p>
      <div className={styles.expertsPanels}>
        {expertsAreLoading && Array.from(Array(+EXPERTS_PER_PAGE), (_, i) => {
          return <ExpertSkeleton key={i}/>;
        })}

        {(!expertsAreLoading && !!experts?.length) && experts.map(({
          id,
          name,
          status,
          image,
          specializations,
          description,
          experience,
          totalOrders
        }) => (
          <ExpertPanel
            key={id}
            id={id}
            name={name}
            status={status}
            image={image}
            specializations={specializations}
            description={description}
            experience={experience}
            totalOrders={totalOrders}
          />
        ))}

        {expertsHaveError &&
          <p className={styles.expertsError}>
            Unable to find experts to to an error!
          </p>
        }
      </div>
      {(!expertsAreLoading && experts.length !== 0) && <Pagination
        perPage={+limit}
        total={+total}
        onPageChange={changePage}
        currentPage={+page}
      />}
    </>
  );
}

export default ExpertsList;

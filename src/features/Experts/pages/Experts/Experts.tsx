import { GetServerSideProps } from 'next';
import { unstable_serialize } from 'swr';
import { ROUTES } from '@/src/constants/routes';
import { validateQueryParam } from '@/src/utils/validateQueryParam';
import { EXPERTS_DEFAULT_QUERY_PARAMS, EXPERTS_PER_PAGE } from '@/src/constants/api';
import { TGetExpertsQueryParams, getExperts } from '@/src/api/experts';
import MainLayout from '@/src/components/templates/MainLayout';
import ExpertsList from '@/src/features/Experts/organisms/ExpertsList';
import styles from './styles.module.scss';

interface IProps {
  response: Expert.GetListResponse;
  fallback: {
    [key: string]: Expert.GetListResponse;
  };
}

function Experts({ response }: IProps) {
  return (
    <MainLayout
      title="Ask Nebula experts"
      description="Choose an expert that matches your spiritual needs"
      url={ROUTES.experts}
    >
      <section className={styles.expertsSection}>
        <div className={styles.expertsContainer}>
          <h1 className={styles.expertsHeading}>Find your advisor</h1>
          <ExpertsList fallbackData={response} />
        </div>
      </section>
    </MainLayout>
  );
}

export default Experts;

export const getServerSideProps: GetServerSideProps = async({ query }) => {
  const queryParams: TGetExpertsQueryParams = {
    _page: validateQueryParam(query['_page']) || '1',
    _limit: validateQueryParam(query['_limit']) || EXPERTS_PER_PAGE,
    ...EXPERTS_DEFAULT_QUERY_PARAMS
  };

  try {
    const response = await getExperts(queryParams);

    return {
      props: {
        response,
        total: response.total,
        fallback: {
          [unstable_serialize(queryParams)]: response
        }
      }
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
};


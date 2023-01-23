import { GetServerSideProps } from 'next';
import ExpertPanel from '@/src/components/organisms/ExpertPanel';
import useExpert from '@/src/hooks/useExpert/useExpert';
import { getExpert } from '@/src/api/expert';
import MainLayout from '@/src/components/templates/MainLayout';
import { API_ROUTES } from '@/src/constants/api';
import About from '@/src/features/Expert/organisms/About';
import { validateQueryParam } from '@/src/utils/validateQueryParam';
import styles from './styles.module.scss';

interface IProps {
  id: string;
  name: string;
  description: string;
  fallbackData: Expert.Entity;
}

function Expert({ id, name, description, fallbackData }: IProps) {
  const { expert } = useExpert(id, fallbackData);

  return (
    <MainLayout
      title={`Expert ${name}`}
      description={description}
      url={`/expert/${id}`}
    >
      <div className={styles.expertPage}>
        <section className={styles.panelSection}>
          <div className={styles.panelContainer}>
            {!!expert && <ExpertPanel {...expert}/>}
          </div>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.panelContainer}>
            {!!expert?.description && <About description={expert?.description}/>}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Expert;

export const getServerSideProps: GetServerSideProps = async({ params }) => {
  const id = validateQueryParam(params?.id);
  if (!id) return { notFound: true };

  try {
    const response = await getExpert(id);

    return {
      props: {
        id,
        response,
        fallback: {
          [API_ROUTES.GET_EXPERT(id)]: response
        },
        name: response.name,
        description: response.description
      }
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
};

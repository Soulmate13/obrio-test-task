import MainLayout from '@/src/components/templates/MainLayout';
import Link from '@/src/components/atoms/Link';
import { ROUTES } from '@/src/constants/routes';
import styles from './styles.module.scss';

function ErrorPage() {
  return (
    <MainLayout
      title="Error Page"
      description="An error occurred"
      url="/500"
      robots={['noindex', 'nofollow']}
    >
      <div className={styles.errorContainer}>
        <h1 className={styles.errorHeading}>
          An error occurred! <br/>
          Try <Link href={ROUTES.experts}>refreshing</Link> the page!</h1>
      </div>
    </MainLayout>
  );
}

export default ErrorPage;

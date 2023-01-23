import { FallbackProps } from 'react-error-boundary';
import MainLayout from '@/src/components/templates/MainLayout';
import styles from './styles.module.scss';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="nebulaApp">
      <MainLayout
        title="Error Page"
        description="An error occurred"
        url="/400"
        robots={['noindex', 'nofollow']}
      >
        <div className={styles.errorContainer}>
          <h1 className={styles.errorHeading}>
            An error occurred!: &quot;{error.message}&quot; <br/>
            Try <button
              className={styles.errorButton}
              onClick={resetErrorBoundary}
            >
              reloading
            </button> the page!
          </h1>
        </div>
      </MainLayout>
    </div>

  );
}

export default ErrorFallback;

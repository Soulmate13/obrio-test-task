import '@/src/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Montserrat, Open_Sans } from '@next/font/google';
import { SWRConfig } from 'swr';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/src/features/Error/pages/ErrorFallback';

const headingFont = Montserrat({ subsets: ['latin'] });
const textFont = Open_Sans({ subsets: ['latin'] });

function NebulaApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <SWRConfig value={{ fallback: pageProps.fallback }}>
        <div className="nebulaApp">
          <style jsx global>{`
            :root {
              --font-text: ${textFont.style.fontFamily};
              --font-heading: ${headingFont.style.fontFamily};
            }
          `}
          </style>
          <Component {...pageProps} />
        </div>
      </SWRConfig>
    </ErrorBoundary>
  );
}

export default NebulaApp;

import { ReactNode } from 'react';
import HtmlHead, { IHeadProps } from '@/src/components/atoms/Head';
import Header from '@/src/components/organisms/Header';
import styles from './styles.module.scss';

interface IProps extends IHeadProps {
  children: ReactNode;
}

function MainLayout({
  children,
  title,
  url,
  robots,
  description
}: IProps) {
  return (
    <>
      <HtmlHead
        title={title}
        description={description}
        robots={robots}
        url={url}
      />
      <Header/>
      <main className={styles.mainSection}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;

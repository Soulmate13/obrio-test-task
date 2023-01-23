import LogoSvg from '@/src/components/atoms/svgs/LogoSvg';
import Link from '@/src/components/atoms/Link';
import styles from 'src/components/organisms/Header/styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link
        href="/experts"
        ariaLabel="Go to Nebula's home page"
      >
        <LogoSvg/>
      </Link>
    </header>
  );
}

export default Header;

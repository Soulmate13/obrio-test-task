import ImageWithFallback from '@/src/components/atoms/ImageWithFallback';
import styles from './styles.module.scss';

interface IProps {
  description: string;
}

function About({ description }: IProps) {
  return (
    <>
      <h2 className={styles.aboutHeading}>About me</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.textCol}>
          <ul className={styles.list}>
            <li>Bio</li>
          </ul>
          <p className={styles.description}>
            {description}
          </p>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <ImageWithFallback
              src="/images/hand.png"
              alt="hand with a star hovering over it"
              fill
              sizes="(max-width: 768px) 50vw,
              (max-width: 1366) 25vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

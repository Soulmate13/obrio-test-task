import clsx from 'clsx';
import styles from './styles.module.scss';

function ExpertSkeleton() {
  return (
    <div className={styles.expertPanelSkeleton}>
      <div className={styles.imageRow}>
        <div className={clsx([styles.skeletonAnimation, styles.skeletonImage])}></div>
        <div className={styles.textCol}>
          <div className={clsx([styles.skeletonAnimation, styles.skeletonText])}></div>
          <div className={clsx([styles.skeletonAnimation, styles.skeletonText])}></div>
          <div className={clsx([styles.skeletonAnimation, styles.skeletonText])}></div>
        </div>
      </div>
      <div className={styles.textRow}>
        <div className={clsx([styles.skeletonAnimation, styles.skeletonText])}></div>
        <div className={clsx([styles.skeletonAnimation, styles.skeletonText])}></div>
      </div>
    </div>
  );
}

export default ExpertSkeleton;

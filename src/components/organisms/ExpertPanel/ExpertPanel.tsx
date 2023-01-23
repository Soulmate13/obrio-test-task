import { useRouter } from 'next/router';
import ImageWithFallback from '@/src/components/atoms/ImageWithFallback';
import Label from '@/src/components/atoms/Label';
import FrameSvg from '@/src/components/atoms/svgs/FrameSvg';
import HeartSvg from '@/src/components/atoms/svgs/HeartSvg';
import Link from '@/src/components/atoms/Link';
import LinkArrowSvg from '@/src/components/atoms/svgs/LinkArrowSvg';
import styles from 'src/components/organisms/ExpertPanel/styles.module.scss';

function ExpertPanel({
  id,
  name,
  status,
  image,
  specializations,
  description,
  experience,
  totalOrders
}: Expert.Picked) {
  const router = useRouter();
  const isDetailsPage = router.pathname === '/expert/[id]';

  return (
    <div className={styles.expertPanel}>
      <div className={styles.panelImage}>
        <div className={styles.imageWrapper}>
          <ImageWithFallback
            src={image}
            alt="expert"
            fill
            sizes="(max-width: 768px) 20vw,
              (max-width: 1366) 10vw"
          />
          <p className={styles.labelWrapper}>
            <Label options={{ type: 'status', variant: status }}>
              {status}
            </Label>
          </p>
        </div>
      </div>

      <div className={styles.panelName}>
        <h2 className={styles.expertName}>{name}</h2>
        <div className={styles.specializationWrapper}>
          {!!specializations.length && specializations.map(({ id, name }) => (
            <Label
              key={id}
              options={{ type: 'specialization' }}
            >
              {name}
            </Label>
          ))}
        </div>
      </div>

      <div className={styles.panelDescription}>
        <p className={styles.descriptionTitle}>About me</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>

      <div className={styles.panelExperience}>
        <div className={styles.experienceContainer}>
          <p className={styles.experienceRow}>
            <HeartSvg/>
            <span className={styles.experienceText}>
              <b>{experience} {experience === 1 ? 'year' : 'years'} </b> of experience
            </span>
          </p>
          <p className={styles.experienceRow}>
            <FrameSvg/>
            <span className={styles.experienceText}>
              <b>{totalOrders}</b> consultations done
            </span>
          </p>
        </div>
        {!isDetailsPage && <Link href={`/expert/${id}`}>
          <span className={styles.linkText}>
            View full profile
          </span>
          <LinkArrowSvg />
        </Link>}
      </div>
    </div>
  );
}

export default ExpertPanel;

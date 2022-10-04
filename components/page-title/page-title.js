import styles from './page-title.module.scss'

export default function PageTitle({title, description}) {
  return (
    <div className={styles.pageTitle}>
      <div className={styles.pageTitle__container}>
        <h1 className={styles.pageTitle__title}>{title}</h1>
        {description && (
          <div className={styles.pageTitle__description}>
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

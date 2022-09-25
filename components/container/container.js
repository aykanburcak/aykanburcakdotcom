import styles from './container.module.scss'

export default function Container({ children, width }) {
  return <div className={width === 'medium' ? styles.container__medium : styles.container}>{children}</div>
}

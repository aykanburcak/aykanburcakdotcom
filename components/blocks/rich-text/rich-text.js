import styles from './rich-text.module.scss'
import Container from "@/components/container/container";
import ReactMarkdown from "react-markdown";

export const RichText = ({title, text_content}) => {
  return (
    <div className={styles.richText}>
      <Container width="medium">
        {title && (
          <h2 className="text-center">{title}</h2>
        )}
        {text_content && (
          /* eslint-disable */
          <div className={styles.richText__content}>
            <ReactMarkdown children={text_content}/>
          </div>
        )}
      </Container>
    </div>
  )
}

import styles from './rich-text.module.scss'
import Container from "@/components/container/container";
import ReactMarkdown from "react-markdown";

export const RichText = ({title, content}) => {
  return (
    <div className={styles.richText}>
      <Container width="medium">
        {title && (
          <h2 className="text-center">{title}</h2>
        )}
        {content && (
          <div className={styles.richText__content}>
            <ReactMarkdown source={content} escapeHtml={false} children={content}/>
          </div>
        )}
      </Container>
    </div>
  )
}

RichText.defaultProps = {}

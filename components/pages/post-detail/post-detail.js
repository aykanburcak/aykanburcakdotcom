import styles from './post-detail.module.scss'
import PageTitle from '@/components/page-title/page-title'
import useTranslation from 'next-translate/useTranslation'
import {useRouter} from 'next/router'
import Tags from "@/components/tags/tags";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'

export default function PostDetail({title, content, tags}) {
  const {t} = useTranslation('common')
  const router = useRouter()

  return (
    <div className={styles.postDetail}>
      <PageTitle title={title}/>

      <div className={styles.postDetail__container}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content}/>
      </div>

      <Tags tags={tags} locale={router.locale} />
    </div>
  )
}

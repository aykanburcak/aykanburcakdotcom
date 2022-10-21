import styles from './archive.module.scss'
import PageTitle from '@/components/page-title/page-title'
import WorkBox from "@/components/work-box/work-box";
import PostBox from "@/components/post-box/post-box";
import Container from "@/components/container/container";
import useTranslation from 'next-translate/useTranslation'

export default function Archive({title, description, works, posts}) {
  const {t} = useTranslation('common')

  return (
    <>
      <PageTitle title={title} description={description}/>
      <div className={styles.categoryArchive}>
        <Container>
          {works.data.length > 0 && (
            <div className="grid">
              {
                works.data?.map((work) =>
                  <div key={work.id} className="grid__column col-6-12">
                    <WorkBox {...work.attributes} />
                  </div>
                )
              }
            </div>
          )}
          <hr/>
          <h2>{t('posts')}</h2>
          {posts.data.length > 0 && (
            <div className="grid">
              {
                posts.data?.map((post) =>
                  <div key={post.id} className="grid__column col-6-12">
                    <PostBox {...post.attributes} />
                  </div>
                )
              }
            </div>
          )}
        </Container>
      </div>
    </>
  )
}

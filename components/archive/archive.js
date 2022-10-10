import styles from './archive.module.scss'
import PageTitle from '@/components/page-title/page-title'
import WorkBox from "@/components/work-box/work-box";
import Container from "@/components/container/container";

export default function Archive({title, description, works}) {

  return (
    <>
      <PageTitle title={title} description={description}/>
      <div className={styles.categoryArchive}>
        <Container>
          {works && (
            <div className="grid">
              {
                works?.map((work) =>
                  <div key={work.id} className="grid__column col-6-12">
                    <WorkBox {...work.attributes} />
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

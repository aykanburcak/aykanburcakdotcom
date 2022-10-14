import styles from './work-detail.module.scss'
import PageTitle from '@/components/page-title/page-title'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import {CATEGORY_SLUG} from '../../../constants/slugs'
import {useRouter} from 'next/router'
import buttonStyles from '../../button/button.module.scss'
import {getStrapiMedia} from "../../../utils";
import Image from "next/image";
import Tags from "@/components/tags/tags";

export default function WorkDetail({title, details, client, categories, link, gallery, tags}) {
  const {t} = useTranslation('common')
  const router = useRouter()

  return (
    <div className={styles.workDetail}>
      <PageTitle title={title} description={details}/>

      <div className={styles.workDetail__container}>
        {client && (
          <div className={styles.workDetail__info}>
            <h4>{t('client')}</h4>
            {client}
          </div>
        )}

        {categories && (
          <div className={styles.workDetail__info}>
            <h4>{t('category')}</h4>
            <div className={styles.workDetail__categories}>
              {categories.data.map((category) =>
                <Link
                  key={category.id}
                  href={`/${CATEGORY_SLUG[router.locale]}/${category.attributes.slug}`}>
                  {category.attributes.title}
                </Link>
              )}
            </div>
          </div>
        )}

        {link && (
          <a href={link}
             className={`${buttonStyles.button} ${buttonStyles.buttonGreen}`}
             target="_blank">
            Siteye git
          </a>
        )}
      </div>

      {gallery.data.length > 0 && (
        <div className={styles.workDetail__gallery}>
          {
            gallery.data.map((image) =>
              <div key={image.id}>
                <Image
                  width={image.attributes.width}
                  height={image.attributes.height}
                  layout="responsive"
                  src={getStrapiMedia(image.attributes.url)}/>
              </div>
            )
          }
        </div>
      )}

      <Tags tags={tags} locale={router.locale} />
    </div>
  )
}

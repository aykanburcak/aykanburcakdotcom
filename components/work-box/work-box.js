import styles from "./work-box.module.scss"
import Image from "next/image";
import {getStrapiMedia} from "../../utils";
import { useRouter } from 'next/router'
import Link from "next/link";
import {WORKS_SLUG} from "../../constants/slugs";

export default function WorkBox({title, featured_image, details, slug}) {
  const router = useRouter()

  return (
    <div onClick={() => router.push(`/${WORKS_SLUG[router.locale]}/${slug}`)} className={styles.workBox}>
      {featured_image && (
        <div className={styles.workBox__image}>
          <Image
            priority
            width={featured_image.data.attributes.width}
            height={featured_image.data.attributes.height}
            src={getStrapiMedia(featured_image.data.attributes.url)}/>
        </div>
      )}

      <Link href={slug}>
        <h4>
          {title}
        </h4>
      </Link>

      {details && (
        <div className={styles.workBox__description}>
          {details}
        </div>
      )}
    </div>
  )
}

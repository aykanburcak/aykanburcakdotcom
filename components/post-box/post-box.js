import styles from "./post-box.module.scss"
import Image from "next/image";
import {getStrapiMedia, getExcerpt} from "../../utils";
import { useRouter } from 'next/router'
import Link from "next/link";
import {POSTS_SLUG} from "../../constants/slugs";

export default function PostBox({title, featured_image, content, slug}) {
  const router = useRouter()

  return (
    <div onClick={() => router.push(`/${POSTS_SLUG[router.locale]}/${slug}`)} className={styles.postBox}>
      {featured_image && (
        <div className={styles.postBox__image}>
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

      {content && (
        <div className={styles.postBox__description}>
          {getExcerpt(content, 150)}
        </div>
      )}
    </div>
  )
}

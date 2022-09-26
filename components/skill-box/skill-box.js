import styles from "./skill-box.module.scss"
import Image from "next/image";
import {getStrapiMedia} from "../../utils";
import { useRouter } from 'next/router'

export default function SkillBox({image, title, description, link}) {
  const router = useRouter()

  return (
    <div onClick={() => router.push(link)} className={styles.skillBox}>
      {image && (
        <div className={styles.skillBox__image}>
          <Image
            priority
            width={image.data[0].attributes.width}
            height={image.data[0].attributes.height}
            src={getStrapiMedia(image.data[0].attributes.url)}/>
        </div>
      )}

      <h4>
        {title}
      </h4>

      <div className={styles.skillBox__description}>
        {description}
      </div>
    </div>
  )
}

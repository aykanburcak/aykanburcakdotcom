import styles from "@/components/tags/tags.module.scss";
import Link from "next/link";
import {TAGS_SLUG} from "../../constants/slugs";

export default function Tags({tags, locale}) {
  return (
    <>
      {tags?.data.length > 0 && (
        <div className={styles.tags}>
          {tags?.data.map((tag) =>
            <Link
              key={tag.id}
              href={`/${TAGS_SLUG[locale]}/${tag.attributes.slug}`}>
              {tag.attributes.title}
            </Link>
          )}
        </div>
      )}
    </>
  )
}

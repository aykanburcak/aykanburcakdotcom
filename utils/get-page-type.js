import {WORKS_SLUG, CATEGORY_SLUG, TAGS_SLUG} from "../constants/slugs";

export function getPageType(slugParent) {
  if (Object.values(WORKS_SLUG).includes(slugParent)) {
    return 'work'
  }
  if (Object.values(CATEGORY_SLUG).includes(slugParent)) {
    return 'category'
  }
  if (Object.values(TAGS_SLUG).includes(slugParent)) {
    return 'tag'
  }
  return ''
}

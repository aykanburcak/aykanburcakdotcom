import {WORKS_SLUG} from "../constants/slugs";

export function getPageType(slugParent) {
  if (Object.values(WORKS_SLUG).includes(slugParent)) {
    return 'work'
  }
}

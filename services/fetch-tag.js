import qs from 'qs'
import {fetchApi} from "./";

export function fetchTag(slug, locale) {

  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      }
    },
    locale: locale
  }, {
    encodeValuesOnly: true,
  });

  return fetchApi(`tags?${query}`)
}

import qs from 'qs'
import {fetchApi} from "./";

export function fetchCategory(slug, locale) {

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

  return fetchApi(`categories?${query}`)
}

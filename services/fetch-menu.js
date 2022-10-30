import qs from 'qs'
import {fetchApi} from "./";

export function fetchMenu(header, locale) {

  const query = qs.stringify({
    filters: {
      menu_handle: {
        $eq: header,
      }
    },
    populate: '*',
    locale: locale
  }, {
    encodeValuesOnly: true,
  });

  return fetchApi(`menus/?${query}`)
}

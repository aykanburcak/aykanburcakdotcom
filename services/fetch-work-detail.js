import qs from 'qs'
import {fetchApi} from "./";
const query = qs.stringify({
  populate: {
    featured_image: {
      populate: '*',
    },
    gallery: {
      populate: '*',
    },
    categories: true,
    tags: true,
  },
}, {
  encodeValuesOnly: true,
});

export function fetchWorkDetail(data) {
  return fetchApi(`${data.url}&${query}`)
}

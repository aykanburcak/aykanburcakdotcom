import qs from 'qs'
import {fetchApi} from "./";

export function fetchWorks(locale) {

  const query = qs.stringify({
    populate: {
      featured_image: {
        populate: '*',
      },
      gallery: {
        populate: '*',
      },
      categories: true,
    },
    pagination: {
      page: 1,
      pageSize: 10,
    },
    locale: locale
  }, {
    encodeValuesOnly: true,
  });

  return fetchApi(`works?${query}`)
}

export function fetchWorksByCategory(category, locale) {

  const query = qs.stringify({
    populate: {
      featured_image: {
        populate: '*',
      },
      gallery: {
        populate: '*',
      },
      categories: true,
    },
    filters: {
      categories: {
        slug: {
          $eq: category,
        }
      },
    },
    locale: locale
  }, {
    encodeValuesOnly: true,
  });

  return fetchApi(`works?${query}`)
}

export function fetchWorksByTag(tag, locale) {

  const query = qs.stringify({
    populate: {
      featured_image: {
        populate: '*',
      },
      gallery: {
        populate: '*',
      },
      categories: true,
    },
    filters: {
      tags: {
        slug: {
          $eq: tag,
        }
      },
    },
    locale: locale
  }, {
    encodeValuesOnly: true,
  });

  return fetchApi(`works?${query}`)
}

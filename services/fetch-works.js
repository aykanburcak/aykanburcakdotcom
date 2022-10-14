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
      start: 0,
      limit: 8,
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
    pagination: {
      start: 0,
      limit: 8,
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
    pagination: {
      start: 0,
      limit: 8,
    },
    locale: locale
  }, {
    encodeValuesOnly: true,
  });

  return fetchApi(`works?${query}`)
}

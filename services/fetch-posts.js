import qs from 'qs'
import {fetchApi} from "./";

export function fetchPosts(locale, page) {

  const query = qs.stringify({
    populate: {
      featured_image: {
        populate: '*',
      },
      categories: true,
    },
    pagination: {
      page: page,
      pageSize: 8,
    },
    locale: locale
  }, {
    encodeValuesOnly: true,
  });

  return fetchApi(`posts?${query}`)
}

export function fetchPostsByCategory(category, locale) {

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

  return fetchApi(`posts?${query}`)
}

export function fetchPostsByTag(tag, locale) {

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

  return fetchApi(`posts?${query}`)
}

export function fetchPostDetail(slug, locale) {
  const query = qs.stringify({
    populate: {
      featured_image: {
        populate: '*',
      },
      filters: {
        tags: {
          slug: {
            $eq: slug,
          }
        },
      },
      categories: true,
      tags: true,
      locale: locale
    },
  }, {
    encodeValuesOnly: true,
  });
  return fetchApi(`posts?${query}`)
}

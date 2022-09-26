export function getData(slug, locale) {
  const slugToReturn = `/${slug}?lang=${locale}`;
  const apiUrl = `pages?filters[slug][$eq]${slug.length > 0 ? `=${slug}` : '%20'}&_locale=${locale}`;

  return {
    url: apiUrl,
    slug: slugToReturn,
  };
}

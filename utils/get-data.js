export function getData(slug, locale) {
  const slugToReturn = `/${slug}?lang=${locale}`;
  const apiUrl = `pages?slug=${slug}&_locale=${locale}`;

  return {
    url: apiUrl,
    slug: slugToReturn,
  };
}

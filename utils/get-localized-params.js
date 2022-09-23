import delve from "delve";

export function getLocalizedParams(query) {
  const lang = delve(query, "lang");
  const slug = delve(query, "slug");

  return { slug: slug || "", locale: lang || "tr" };
}

export function getStrapiUrl(path) {
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${path}`;
}

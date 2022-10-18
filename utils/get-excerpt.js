export function getExcerpt(string, limit) {
  return string.substr( 0, string.lastIndexOf( ' ', limit ) ) + '...';
}

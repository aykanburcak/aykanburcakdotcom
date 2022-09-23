export function redirectToHomepage() {
  return {
    redirect: {
      destination: `/index`,
      permanent: false,
    },
  };
}

import delve from "delve";
import {getDataDependencies, fetchApi} from "../services";
import {getData, getLocalizedParams} from "../utils";
import BlockManager from "@/components/block-manager";

const Page = ({ blocks }) => {
  return <BlockManager blocks={blocks} />;
};

export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);

  try {
    const data = getData(slug, locale);
    const res = await fetchApi(`${data.url}&populate[blocks][populate]=*`);

    const pageBlocks = await getDataDependencies(delve(res, "0"));

    return { props: {...pageBlocks}};
  } catch (error) {
    return {
      props: {}
    };
  }
}

export default Page;

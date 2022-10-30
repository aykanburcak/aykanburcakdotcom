import delve from "delve";
import {getDataDependencies, fetchApi} from "../services";
import {getPageData, getLocalizedParams} from "../utils";
import Layout from "../layouts/main"
import BlockManager from "@/components/block-manager";
import qs from 'qs'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Page = ({blocks}) => {

  return (
    <>
      <Layout>
        <BlockManager blocks={blocks}/>
        <ReactQueryDevtools initialIsOpen />
      </Layout>
    </>
  )
};

export async function getServerSideProps(context) {
  const {slug, locale} = getLocalizedParams(context.query);

  const query = qs.stringify({
    populate: {
      blocks: {
        populate: {
          slides: {
            populate: '*'
          },
          image_card: {
            populate: '*'
          }
        },
      },
    },
    locale: context.locale
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  try {
    const data = getPageData(slug, locale);
    const res = await fetchApi(`${data.url}&${query}`);
    console.log("-> res", res);

    const pageBlocks = await getDataDependencies(delve(res.data, "0"));

    return {props: {...pageBlocks}};
  } catch (error) {
    return {
      props: {}
    };
  }
}

export default Page;

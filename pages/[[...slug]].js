import delve from "delve";
import {getDataDependencies, fetchApi} from "../services";
import {getPageData, getLocalizedParams} from "../utils";
import Layout from "../layouts/main"
import BlockManager from "@/components/block-manager";
import qs from 'qs'

const Page = ({blocks}) => {

  return (
    <>
      <Layout>
        <BlockManager blocks={blocks}/>
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
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  try {
    const data = getPageData(slug, locale);
    const res = await fetchApi(`${data.url}&${query}`);

    const pageBlocks = await getDataDependencies(delve(res.data, "0"));

    return {props: {...pageBlocks}};
  } catch (error) {
    return {
      props: {}
    };
  }
}

export default Page;

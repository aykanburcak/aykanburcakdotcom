import delve from "delve";
import {getDataDependencies, fetchApi} from "../services";
import {getData, getLocalizedParams} from "../utils";
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
          }
        },
      },
    },
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  try {
    const data = getData(slug, locale);
    const res = await fetchApi(`${data.url}&${query}`);

    const pageBlocks = await getDataDependencies(delve(res, "0"));

    return {props: {...pageBlocks}};
  } catch (error) {
    return {
      props: {}
    };
  }
}

export default Page;

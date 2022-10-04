import {fetchApi} from "../../services";
import {getWorkData, getPageType} from "../../utils";
import Layout from "../../layouts/main"
import WorkDetail from "@/components/work-detail/work-detail";
import qs from 'qs'

const Page = ({pageType, pageDetails}) => {
  return (
    <>
      <Layout>
        {pageType === 'work' && <WorkDetail {...pageDetails} />}
      </Layout>
    </>
  )
};

export async function getServerSideProps(context) {
  const {slug, slugParent} = context.query;
  const {locale} = context;
  const query = qs.stringify({
    populate: {
      featured_image: {
        populate: '*',
      },
      gallery: {
        populate: '*',
      },
      categories: true,
    },
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  try {
    const pageType = getPageType(slugParent);
    const data = getWorkData(slug, locale);
    const res = await fetchApi(`${data.url}&${query}`);
    const pageDetails = res[0]?.attributes;

    return {
      props: {
        pageType,
        pageDetails
      }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
}

export default Page;

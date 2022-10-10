import {getWorkData, getPageType} from "../../utils";
import Layout from "../../layouts/main"
import WorkDetail from "@/components/pages/work-detail/work-detail";
import {fetchWorkDetail} from "../../services/fetch-work-detail";
import {fetchWorksByCategory, fetchWorksByTag} from "../../services/fetch-works";
import {fetchCategory} from "../../services/fetch-category";
import Archive from "@/components/archive/archive";
import {fetchTag} from "../../services/fetch-tag";

const Page = ({pageType, pageDetails}) => {
  return (
    <>
      <Layout>
        {pageType === 'work' && <WorkDetail {...pageDetails} />}
        {(pageType === 'category' || pageType === 'tag') && <Archive {...pageDetails} />}
      </Layout>
    </>
  )
};

export async function getServerSideProps(context) {
  const {slug, slugParent} = context.query;
  const {locale} = context;
  let pageDetails = {};


  try {
    const pageType = getPageType(slugParent);
    const data = getWorkData(slug, locale);

    if (pageType === 'work') {
      const res = await fetchWorkDetail(data);
      pageDetails = res[0]?.attributes;
    }

    if (pageType === 'category') {
      pageDetails.works = await fetchWorksByCategory(slug, locale)
      const category = await fetchCategory(slug, locale)
      pageDetails.title = category?.[0]?.attributes.title || null
      pageDetails.description = category?.[0]?.attributes.description || null
    }

    if (pageType === 'tag') {
      pageDetails.works = await fetchWorksByTag(slug, locale)
      const tag = await fetchTag(slug, locale)
      pageDetails.title = tag?.[0]?.attributes.title || null
      pageDetails.description = tag?.[0]?.attributes.description || null
    }


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

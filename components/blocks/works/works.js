import styles from './works.module.scss'
import buttonStyles from '../../button/button.module.scss'
import Container from "@/components/container/container";
import {useEffect} from "react";
import WorkBox from "@/components/work-box/work-box";
import {fetchWorks} from "../../../services/fetch-works";
import Link from "next/link";
import {useInView} from 'react-intersection-observer'
import {useInfiniteQuery,} from "@tanstack/react-query"
import {useRouter} from 'next/router'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

export const Works = ({ title, button_link, button_label, enable_load_more }) => {
  const { ref, inView } = useInView()
  const router = useRouter()

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    ['works'],
    async ({ pageParam = 1 }) => {
      return await fetchWorks(router.locale, pageParam)
    },{
      getPreviousPageParam: (page, pages) => page.meta.pagination.page - 1,
      getNextPageParam: (page, pages) => page.meta.pagination.page === page.meta.pagination.pageCount ? false : page.meta.pagination.page + 1,
    }
  )

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    if (inView && enable_load_more && hasNextPage) {
      fetchNextPage()
    }
    return () => {
      cancel = true;
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <div className={styles.works}>
      <Container>
        {title && (
          <h2 className="text-center">{title}</h2>
        )}

        <>
          {status === 'loading' ? (
            <p>Loading...</p>
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              {data.pages?.map((page, index) => (
                <div key={`page-${index}`}>
                  <div className="grid">
                    {page.data.map((work) => (
                      <div key={work.id} className="grid__column col-6-12">
                        <WorkBox {...work.attributes} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={ref} />
            </>
          )}
          {<ReactQueryDevtools initialIsOpen />}
        </>

        {button_link && (
          <div className="text-center mt-3">
            <Link
              href={button_link}>
              <a className={`${buttonStyles.button} ${buttonStyles.buttonGreen}`}>
                {button_label}
              </a>
            </Link>
          </div>
        )}

      </Container>
    </div>
  );
};

import styles from './works.module.scss'
import buttonStyles from '../../button/button.module.scss'
import Container from "@/components/container/container";
import {useEffect, useState} from "react";
import WorkBox from "@/components/work-box/work-box";
import {fetchWorks} from "../../../services/fetch-works";
import Link from "next/link";
import {useInView} from 'react-intersection-observer'
import {useInfiniteQuery,} from "@tanstack/react-query"
import {useRouter} from 'next/router'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

export const Works = ({ title, button_link, button_label, enable_load_more }) => {
  const [works, setWorks] = useState([])
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
    async ({ pageParam = 0 }) => {
      return await fetchWorks(router.locale, pageParam)
    },
    {
      getPreviousPageParam: (firstPage) => firstPage?.previousId ?? undefined,
      getNextPageParam: (lastPage) => lastPage?.nextId ?? undefined,
      staleTime: 120 * 1000,
    },
  )

  useEffect(() => {
    if (inView && enable_load_more) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <div className={styles.works}>
      <Container>
        {title && (
          <h2 className="text-center">{title}</h2>
        )}

        <div>
          {status === 'loading' ? (
            <p>Loading...</p>
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              {data?.pages?.map((page) => (
                <div key={`page-${page.nextId}`}>
                  <div className="grid">
                    {page.map((work) => (
                      <div key={work.id} className="grid__column col-6-12">
                        <WorkBox {...work.attributes} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {/*<div>
                <button
                  ref={ref}
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                >
                  {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                      ? 'Load Newer'
                      : 'Nothing more to load'}
                </button>
              </div>*/}
            </>
          )}
          {<ReactQueryDevtools initialIsOpen />}
        </div>

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

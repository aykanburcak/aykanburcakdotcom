import styles from './posts.module.scss'
import buttonStyles from '../../button/button.module.scss'
import Container from "@/components/container/container";
import {useEffect} from "react";
import PostBox from "@/components/post-box/post-box";
import {fetchPosts} from "../../../services/fetch-posts";
import Link from "next/link";
import {useInView} from 'react-intersection-observer'
import {useInfiniteQuery,} from "@tanstack/react-query"
import {useRouter} from 'next/router'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

export const Posts = ({ title, button_link, button_label, enable_load_more }) => {
  const { ref, inView } = useInView()
  const router = useRouter()

  const {
    status,
    data,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    [`posts-${router.locale}`],
    async ({ pageParam = 1 }) => {
      return await fetchPosts(router.locale, pageParam)
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
    <div className={styles.posts}>
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
              {data.pages?.slice(0, enable_load_more ? 99 : 1).map((page, index) => (
                <div key={`page-${index}`}>
                  <div className="grid">
                    {page.data.slice(0, enable_load_more ? 99 : 8).map((post) => (
                      <div key={post.id} className="grid__column col-6-12">
                        <PostBox {...post.attributes} />
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

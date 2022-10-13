import type { NextPage } from 'next';
import styled from '@emotion/styled';

import MainLayout from '../components/mainpage/templates/layout-main';
import { useGetAnimations } from 'hooks/get-animations';
import { useEffect, useState, useRef } from 'react';
import { AniType } from 'components/mainpage/templates/main-query';
import { useRouter } from 'next/router';
import SkeletonAniList from '../components/mainpage/organisms/skeleton-list';

const MainPage: NextPage = () => {
  const router = useRouter();
  const lastRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [page, setPage] = useState(1);
  const { data, loading, error } = useGetAnimations(page);
  const [animation, setAnimation] = useState<AniType[]>([]);
  const [urlPath, setUrlPath] = useState<string>(router.asPath);

  useEffect(() => {
    if (data?.Page.media?.length) {
      if (urlPath !== router.asPath || animation.length === 0) {
        setUrlPath(router.asPath);
        setPage(1);
      }

      const io = new IntersectionObserver(
        (entries) => {
          const target = entries[0];

          if (target.isIntersecting) {
            setPage((page) => page + 1);
          }
        },
        { threshold: 1 },
      );

      io.observe(lastRef.current);

      return () => {
        io.disconnect();
      };
    }
  }, [animation, data, router.asPath, urlPath]);

  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setAnimation(data.Page.media);
    } else {
      setAnimation((ani) => [...ani, ...data.Page.media]);
    }
  }, [data, page]);

  return (
    <MainpageWrapper>
      {error ? <div>error!!</div> : <MainLayout data={animation} />}
      {loading && <SkeletonAniList />}
      <div ref={lastRef}></div>
    </MainpageWrapper>
  );
};

const MainpageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default MainPage;

import type { NextPage } from 'next';
import MainLayout from '../components/mainpage/templates/layout-main';
import { useGetAnimations } from 'hooks/get-animations';
import styled from '@emotion/styled';
import { useEffect, useState, useRef } from 'react';
import { AniType } from 'components/mainpage/templates/main-query';

const MainpageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainPage: NextPage = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useGetAnimations(page);
  const lastRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [animation, setAnimation] = useState<AniType[]>([]);

  useEffect(() => {
    let io: IntersectionObserver | undefined = undefined;

    if (data?.Page.media?.length) {
      io = new IntersectionObserver(
        (entries, observer) => {
          const target = entries[0];

          if (target.isIntersecting) {
            setPage((page) => page + 1);
            setAnimation((ani) => ani?.concat(data.Page.media));

            observer.disconnect();
          }
        },
        { threshold: 1 },
      );
      io.observe(lastRef.current);
    }
  }, [animation, data]);

  return (
    <MainpageWrapper>
      <MainLayout data={animation} loading={loading} error={error} />
      <div ref={lastRef}></div>
    </MainpageWrapper>
  );
};

export default MainPage;

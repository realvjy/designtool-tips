"use client";

import styled from "styled-components";
import TutsCard from "@/components/tuts-card";
import { tutsData } from "@/lib/tuts-data";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { HoverBox } from "@/styles/ReusableStyles";

export default function Home() {
  const loader = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<number>(33);
  const [fullLoad, setFullLoad] = useState<boolean>(false);
  let tutCards = tutsData.filter((f) => !f.hidden);
  tutCards.sort((a, b) => b.id - a.id);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    // setLoading(entry.isIntersecting);
    setVisible((prevValue) => prevValue + 2);
  };

  const options: IntersectionObserverInit = useMemo(() => {
    return {
      root: null,
      rootMargin: "10px",
      threshold: 1,
    };
  }, []);

  // useEffect(() => {
  //   if (fullLoad) {
  //     const observe = new IntersectionObserver(callbackFunction, options);
  //     const currentTarget = loader.current;
  //     if (currentTarget) observe.observe(currentTarget);
  //     return () => {
  //       if (currentTarget) observe.observe(currentTarget);
  //     };
  //   } else {
  //     setFullLoad(true);
  //   }
  // }, []);

  useEffect(() => {
    if (visible > tutCards.length) {
      setFullLoad(true);
    }
  }, [visible]);

  return (
    <MainSection>
      <div className="container">
        <Wrapper>
          {tutCards.slice(0, visible).map((data, key) => {
            return (
              <HoverEffect>
                <TutsCard tuts={data} key={key} />
              </HoverEffect>
            );
          })}
        </Wrapper>
        {!fullLoad ? (
          <LoaderBtn ref={loader} onClick={showMoreItems}>
            {/* {fullLoad && <h2>More tutorial...</h2>} */}
            More tips...
          </LoaderBtn>
        ) : (
          <MoreInfo>
            <h2>More tips coming soon. Check</h2>
            <a href="https://x.com/realvjy">twitter</a>
          </MoreInfo>
        )}
      </div>
    </MainSection>
  );
}

const MainSection = styled.section`
  .screenshot {
    margin-top: 40px;
  }
`;

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  h2 {
    font-size: 14px;
    opacity: 0.5;
  }
  a {
    font-size: 14px;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`;

const LoaderBtn = styled.div`
  font-size: 1em;
  border-radius: 24px;
  padding: 8px 20px;
  cursor: default;
  border: 1px solid var(--primary-border-color);
  width: 100%;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  color: rgba(52, 52, 52, 0.7);
  background: rgba(120, 120, 120, 0.01);
  &:hover {
    background: rgba(120, 120, 120, 0.05);
  }
`;

const HoverEffect = styled(HoverBox)`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid var(--primary-border-color);
  border-radius: 24px;
  transform: translateY(-20px);
  padding-bottom: 4px;
`;

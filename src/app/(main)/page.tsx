"use client";

import styled from "styled-components";
import TutsCard from "@/components/tuts-card";
import { tutsData } from "@/lib/tuts-data";
import Link from "next/link";

//TODO: reformat everything and add more animations

export default function Home() {
  return (
    <MainSection>
      <div className="container">
        <Wrapper>
          {tutsData.map((data) => {
            return <TutsCard tuts={data} />;
          })}
        </Wrapper>
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
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FButton = styled(Link)`
  font-size: 1em;
  border-radius: 15px;
  padding: 8px 20px;
  background: var(--primary-fg-color);
  color: var(--primary-bg-color);
  margin-top: 18px;
`;

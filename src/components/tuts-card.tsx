"use client";
import { tutsDataType } from "@/lib/tuts-data";
import styled from "styled-components";
import Link from "next/link";

export default function TutsCard({ tuts }: { tuts: tutsDataType }) {
  const views = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(tuts.view);

  return (
    <Wrapper>
      <Content>
        <TutsTitle>{tuts.title}</TutsTitle>
        <MetaInfo>
          <div className={"downloads "}>{tuts.date} </div>
          <div className={"downloads "}>{tuts.source} </div>
        </MetaInfo>
        <TutsDescription> {tuts.description} </TutsDescription>
        <Thumbnail>
          <img src={`/tuts-img/${tuts.img}`} />
        </Thumbnail>
        <TutsButton href={tuts.url} target={"_blank"}>
          View on X/Twitter
        </TutsButton>
      </Content>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--primary-border-color);
`;
export const Thumbnail = styled.div`
  height: 60%;
  width: 100%;
  img {
    border-radius: 12px;
  }
`;
export const MetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 12px 20px 20px 20px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .Tuts-type {
    font-size: 0.75em;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 4px 8px;

    &.free {
      background: var(--color-bg-cyan);
      color: var(--color-text-blue);
    }

    &.freemium,
    &.pad {
      background: var(--color-bg-orange);
      color: var(--color-text-orange);
    }
  }
  .downloads {
    font-size: 1em;
    color: var(--primary-fg-text);
    font-weight: 600;
    @media screen and (max-width: 500px) {
      font-size: 0.9em;
    }
  }
`;
export const TutsLogo = styled.div`
  position: absolute;
  background: red;
  border: 3px solid white;
  transform: translateY(calc(-50% - 12px));
  border-radius: 12px;
  display: flex;
  overflow: hidden;

  img {
    height: 48px;
  }
`;
export const TutsTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  text-transform: capitalize;
  margin-top: 8px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const TutsDescription = styled.p`
  font-size: 1.12em;
  font-weight: 400;
  color: var(--primary-fg-text);
  margin-top: 8px;
  margin-bottom: 12px;
  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`;
export const TutsButton = styled(Link)`
  font-size: 1em;
  text-align: center;
  border-radius: 20px;
  padding: 8px 20px;
  color: var(--color-text-blue);
  border: 1px solid var(--border-color);
  margin-top: 18px;
`;

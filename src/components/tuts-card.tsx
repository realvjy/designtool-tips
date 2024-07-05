"use client";
import { tutsDataType } from "@/lib/tuts-data";
import styled from "styled-components";
import Link from "next/link";
import { Badge } from "@/styles/ReusableStyles";

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
          <div className="tag">
            {tuts.tags.map((m) => {
              return <Tag key={m}>{m}</Tag>;
            })}
          </div>
          <div className="source">
            <div className={"meta"}>{tuts.date} </div>
            <span>•</span>
            <div className={"meta"}>{tuts.source} </div>
          </div>
        </MetaInfo>
        <TutsDescription> {tuts.description} </TutsDescription>

        <Thumbnail>
          <a href={tuts.url} target="_blank">
            <img src={`/tuts-img/${tuts.img}`} />
          </a>
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
`;
export const Thumbnail = styled.div`
  height: 60%;
  width: 100%;
  img {
    width: 100%;
    border-radius: 12px;
  }
`;

export const Tag = styled.div`
  border: 1px solid rgba(120, 120, 120, 0.2);
  color: rgba(80, 80, 80, 0.8);
  padding: 1px 6px;
  font-size: 12px;
  line-height: 14px;
  border-radius: 12px;
`;
export const MetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 6px;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 500;
  gap: 8px;
  text-transform: capitalize;
  .source {
    flex-direction: row;
    display: flex;
    gap: 8px;
  }
  .tag {
    flex-direction: row;
    display: flex;
    gap: 4px;
  }
  span {
    opacity: 0.2;
  }
  .meta {
    color: var(--primary-fg-text);
    opacity: 0.7;
  }
`;
export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 8px 12px 12px 12px;
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
    opacity: 0.7;
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
  font-size: 17px;
  margin-bottom: 2px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const TutsDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  color: var(--primary-fg-text);
  margin-top: 8px;
  margin-bottom: 12px;
  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`;
export const TutsButton = styled(Link)`
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
  padding: 6px 20px;
  color: var(--color-text-blue);
  border: 1px solid var(--border-color);
  margin-top: 18px;
  &:hover {
    background: var(--white);
  }
`;

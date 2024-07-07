"use client";
import { tutsDataType } from "@/lib/tuts-data";
import styled from "styled-components";
import Link from "next/link";
import { Badge } from "@/styles/ReusableStyles";
import { useRef } from "react";

interface CardBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function TutsCard({ tuts }: { tuts: tutsDataType }) {
  const views = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(tuts.view);
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const borderWrapRef = useRef<HTMLDivElement>(null);
  // const cardBounds: CardBounds = {
  //   x: 0, // Adjust as per your actual bounds
  //   y: 0, // Adjust as per your actual bounds
  //   width: 100, // Adjust as per your actual bounds
  //   height: 100, // Adjust as per your actual bounds
  // };

  let cardBounds: DOMRect | null = null;

  function onMouseEnter() {
    console.log("entered");

    if (cardWrapRef.current) {
      cardBounds = cardWrapRef.current.getBoundingClientRect();
      // console.log(cardBounds);

      document.addEventListener("mousemove", rotateToMouse);
    }
  }

  function onMouseLeave() {
    document.removeEventListener("mousemove", rotateToMouse);
    if (cardWrapRef.current) {
      cardWrapRef.current.style.transform = "";
    }
    if (borderWrapRef.current) {
      borderWrapRef.current.style.backgroundImage = "";
    }
  }

  function rotateToMouse(e: MouseEvent) {
    console.log("rotate event");

    console.log(cardBounds);
    if (!cardBounds || !cardWrapRef.current || !borderWrapRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - cardBounds.left;
    const topY = mouseY - cardBounds.top;
    const center = {
      x: leftX - cardBounds.width / 2,
      y: topY - cardBounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    console.log(mouseX, mouseY, topY, center);

    cardWrapRef.current.style.transform = `
      scale3d(1.0, 1.0, 1.0)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 0.8}deg
    `;

    borderWrapRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + cardBounds.width / 2 - 20}px
        ${center.y * 2 + cardBounds.height / 2 - 20}px,
        #ffffff2c,
        #0000000f
      )
    `;
  }

  return (
    <Wrapper
      ref={cardWrapRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Content ref={borderWrapRef}>
        <TutsTitle>{tuts.title}</TutsTitle>
        <TutsDescription> {tuts.description} </TutsDescription>
        <Thumbnail>
          <a href={tuts.url} target="_blank">
            <img src={`/tuts-img/${tuts.img}`} />
          </a>
        </Thumbnail>

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
        <TutsButton href={tuts.url} target={"_blank"}>
          View on{" "}
          {tuts.source === ("twitter" || "x") ? "X/Twitter" : tuts.source}
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
  background: rgba(128, 128, 128, 0.3);
  background-blend-mode: luminosity;
  backdrop-filter: blur(45px);
  border-radius: 24px;
  &::before {
    content: "";
    pointer-events: none;
    user-select: none;
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      156.52deg,
      rgba(255, 255, 255, 0.4) 2.12%,
      rgba(255, 255, 255, 0.0001) 39%,
      rgba(255, 255, 255, 0.0001) 54.33%,
      rgba(255, 255, 255, 0.1) 93.02%
    );
    mask: linear-gradient(black, black) content-box,
      linear-gradient(black, black);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
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
  border: 1px solid rgba(187, 187, 187, 0.2);
  color: rgba(255, 255, 255, 0.5);
  padding: 1px 6px;
  font-size: 12px;
  line-height: 14px;
  border-radius: 12px;
`;
export const MetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
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
  padding: 18px 24px 20px 24px;
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
  margin-bottom: 8px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const TutsDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 120%;
  color: var(--primary-fg-text);
  margin-bottom: 8px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;
export const TutsButton = styled(Link)`
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
  padding: 8px 20px;
  color: var(--light-white);
  margin-top: 8px;
  background: linear-gradient(
      0deg,
      rgba(94, 94, 94, 0.07),
      rgba(94, 94, 94, 0.08)
    ),
    rgba(255, 255, 255, 0.08);
  background-blend-mode: color-dodge, lighten;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(94, 94, 94, 0.07),
        rgba(94, 94, 94, 0.08)
      ),
      rgba(255, 255, 255, 0.06);
  }
`;

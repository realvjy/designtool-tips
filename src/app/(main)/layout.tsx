"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styled from "styled-components";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <svg id="texture">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
      <Header />
      {children}
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    /* height: 420px; */
    z-index: -100;
    /* background: linear-gradient(180deg,transparent,hsla(0,0%,100%,1) 47.39%,#fff),linear-gradient(90deg,#f9ddf1 .07%,#e5e1ff 16.73%,#daedff 34.48%,#e2f4e3 49.98%,#ebf5d8 66.12%,#faf2da 81.95%,#fbe5d8 99.9%); */
    background-image: url("/header-gradient.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 1640px auto;
    z-index: -1;
    pointer-events: none;
  }

  #texture {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -99;
    width: 100%;
    height: calc(100vh + 200px);
    opacity: 0.25;
    pointer-events: none;
    transform: translateY(0px);
    filter: contrast(120%) brightness(120%);
  }
`;

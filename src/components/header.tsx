/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styled from "styled-components";
import { BorderLine, RealvjyC, RealvjyC2 } from "./icons";
import { Seprator } from "@/styles/ReusableStyles";
import { tutsData } from "@/lib/tuts-data";

export default function Header() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <LogoWrapper href={"/"}>
            <RealvjyC2 className="img" />
            <h1>design tool tips</h1>
          </LogoWrapper>
          <p className="subtitle">
            Over the year shared lots of tips and tricks related to design
            tools, mostly about Figma, but they can be applied to any other
            tools.
          </p>
          <Seprator>
            <BorderLine className="left" />
            {/* <span>
              <img src={"/three-dots.svg"} className="title-dot" />
            </span> */}
            <h3>{tutsData.filter((f) => !f.hidden).length} tips</h3>
            <BorderLine className="right" />
          </Seprator>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.header`
  .subtitle {
    text-align: center;
    margin: 8px 0;
    max-width: 90%;
    opacity: 0.6;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;
const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .img {
    width: auto;
    max-height: 40px;
  }
`;
const HeaderText = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 1.68em;
  font-weight: 600;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  &.themed {
    padding: 4px 16px;
    background: black;
    border-radius: 20px;
    color: white;
  }
`;

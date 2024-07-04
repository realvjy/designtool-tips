/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styled from "styled-components";
import { Coolshape, shapeTypes } from "coolshapes-react";
import { RealvjyC, RealvjyC2 } from "./icons";

export default function Header({
  shape,
}: {
  shape: { shapeType: shapeTypes; index: number };
}) {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <LogoWrapper href={"/"}>
            <RealvjyC2 className="img" />
            <h1>design tool tips</h1>
          </LogoWrapper>
          {/* <HeaderText>Figma plugin I made over the years</HeaderText> */}
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.header``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;
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

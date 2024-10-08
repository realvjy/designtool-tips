"use client";
import styled from "styled-components";
import Link from "next/link";
import { RealvjyC, RealvjyC2 } from "./icons";

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          tips, design & code by
          <span>
            <Link target={"_blank"} href={"https://vjy.me"}>
              <img src="realvjy.svg" />
            </Link>
          </span>
          at
          <span>
            <Link target={"_blank"} href={"https://overlayz.studio"}>
              @overlayz
            </Link>
          </span>
          <span className={"img"}>
            <a href="https://x.com/realvjy">
              <img src={"/icons/twitter.svg"} />
            </a>
          </span>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.footer`
  padding: 10px 0px;
  margin-top: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 40px 0;
  font-size: 14px;
  font-weight: 400;
  color: #626262;
  align-items: center;
  span {
    padding-inline: 5px;
    font-weight: 500;
    &.img {
      padding: 0;
    }
  }
`;

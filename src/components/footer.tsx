"use client";
import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          tips, design & code by{" "}
          <span>
            <Link target={"_blank"} href={"https://vjy.me"}>
              realvjy
            </Link>
          </span>{" "}
          at{" "}
          <span>
            <Link target={"_blank"} href={"https://overlayz.co"}>
              @overlayz
            </Link>
          </span>{" "}
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
  margin-top: 100px;
  padding: 40px 0;
  font-size: 14px;
  font-weight: 400;
  color: #626262;

  span {
    padding-inline: 5px;
    font-weight: 500;
    &.img {
      padding: 0;
    }
  }
`;

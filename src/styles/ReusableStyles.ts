import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 708px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button``;

export const Tag = styled.div`
  font-weight: 700;
  line-height: 14px;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 9px;
  display: inline-flex;
  text-transform: uppercase;
  color: var(--white);
  @media screen and (max-width: 768px) {
    font-size: 9px;
    padding: 0px 4px;
  }

  &.onimage {
    position: absolute;
    top: 8px;
    left: 8px;
    @media screen and (max-width: 768px) {
      top: 6px;
      left: 6px;
    }
  }
  &.red {
    background: var(--red);
  }
  &.green {
    background: var(--green);
  }
  &.blue {
    background: var(--blue);
  }
  &.yellow {
    background: var(--yellow);
  }
  &.pink {
    background: var(--pink);
  }
  &.orange {
    background: var(--orange);
  }
  &.black {
    background: var(--tag-black);
    opacity: 0.8;
  }
  &.grad-cool {
    background-color: #6bbba6;
    background-image: linear-gradient(90deg, #566cec, #d749af 50%, #ff7c51);
  }
`;

export const ButtonLink = styled.a`
  font-size: 24px;
  display: inline-flex;
  line-height: normal;
  padding: 16px 32px;
  border-style: none;
  outline: none;
  cursor: pointer;
  border-radius: 36px;
  background: rgb(228, 232, 236);
  background: linear-gradient(
    262.31deg,
    #06f1f8 1.86%,
    #2f8fff 27.73%,
    #ff3382 68.97%,
    #ffbd6f 99.88%
  );
  transition: all 0.3s;
  position: relative;
`;

export const SectionTitle = styled.h2`
  padding: 0 16px;
  font-size: 14px;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--light-gray);
  opacity: 0.7;
  &.center {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const SpacedTitle = styled.h2`
  padding: 0 16px;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--light-gray);
  opacity: 0.4;
  &.center {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const HoverBox = styled.div`
  &::before {
    content: "";
    border-radius: 24px;
    display: block;
    position: absolute;
    z-index: -1;
    inset: -2px;
    opacity: 0;
    transform: scale(0.8);
    @media screen and (max-width: 768px) {
      border-radius: 14px;
    }
  }
  &:hover {
    transition: all 333ms ease 0s;
    &::before {
      opacity: 1;
      background: var(--hover-bg);
      transition: all 333ms ease 0s;
      transform: scale(1);
    }
  }
`;

export const Seprator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  svg {
    opacity: 0.2;
  }
  span {
    width: max-content;
  }
  h3 {
    margin: 0 12px;
    font-size: 14px;
    @media screen and (max-width: 768px) {
      margin: 0 12px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    transform: scale(0.8);
  }
`;
export const Screens = styled.div`
  position: relative;
  display: inline-grid;
  grid-gap: 16px;
  gap: 24px;
  padding-top: 12px;
  padding-bottom: 40px;
  &.full-width {
    width: 100%;
  }
  &.grid-3 {
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &.grid-2 {
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  line-height: 0;
  @media screen and (max-width: 768px) {
    padding: 16px;
  }

  span {
    border-radius: 16px;
    display: flex;
  }
  img {
    width: 100%;
    border-radius: 16px;
  }

  .mock {
    border-radius: 16px;
    /* border: 12px solid #FCFCFC; */
    border: 0.5px solid var(--border);
    display: flex;
  }
`;

export const Badge = styled.div`
  position: relative;
  display: inline-grid;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  padding: 1px 6px;
  border-radius: 9px;
  margin-right: 6px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  &.blue {
    background: linear-gradient(270deg, #e5e4ff 0%, #dce8ff 100%);
    color: rgba(7, 4, 138, 0.7);
  }
  &.red {
    background: linear-gradient(90deg, #ffc4c4 0%, #ffe7e7 100%);
    color: rgba(211, 0, 0, 0.7);
  }
  &.pink {
    background: linear-gradient(90deg, #ffd5e3 0%, #fff0f8 100%);
    color: rgba(216, 44, 106, 0.8);
  }
  &.purple {
    background: linear-gradient(180deg, #f5f1ff 0%, #ebe9ff 100%);
    color: rgba(92, 27, 174, 0.8);
  }

  &.teal {
    background: linear-gradient(270deg, #ccfaff 0%, #afd4ff 99.55%);
    color: rgba(0, 113, 194, 0.8);
  }
  &.orange {
    background: linear-gradient(270deg, #ffcedf 0%, #f7d1ff 100%);
    color: rgba(140, 0, 126, 0.8);
  }
  &.yellow {
    background: linear-gradient(90deg, #ffd566 0%, #fff8e6 100%);
    color: rgb(223 93 9 / 80%);
    /* background: linear-gradient(90deg, #FFD7D7 0%, #FFF4E6 100%);
    color: rgba(204, 61, 0, .8); */
  }

  &.black {
    background: linear-gradient(
      90deg,
      rgba(100, 100, 100, 0.2) 0%,
      rgba(200, 200, 200, 0.1) 100%
    );
    color: var(--text-secondary);
    /* background: linear-gradient(90deg, #FFD7D7 0%, #FFF4E6 100%);
    color: rgba(204, 61, 0, .8); */
  }
  &.green {
    background: linear-gradient(90deg, #d8f9bb 0%, #fdf8cc 100%);
    color: rgba(60, 132, 0, 0.8);
  }
`;

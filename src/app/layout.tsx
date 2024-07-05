import { Inter } from "next/font/google";
import "../styles/globals.scss";
import StyledComponentsRegistry from "@/styles/styled-registry";
import { Metadata } from "next";
import localFont from "next/font/local";
import { interDisplay } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "realvjy's design tool tips and tricks",
  description:
    "realvjy's design tool tips and tricks mostly about figma but can use on other design tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interDisplay.variable}`}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

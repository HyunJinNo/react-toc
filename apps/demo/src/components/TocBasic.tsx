"use client";

import { H2, H3, H4, Toc, TocProvider } from "@hyunjinno/react-toc";

export const TocBasic = () => {
  return (
    <TocProvider>
      <div className="flex flex-row justify-between">
        <div className="border p-1">
          <H2>1. Heading</H2>
          <H2>2. Heading</H2>
          <H3>2.1. Heading</H3>
          <H4>2.1.1. Heading</H4>
          <H4>2.1.2. Heading</H4>
          <H3>2.2. Heading</H3>
          <H2>3. Heading</H2>
        </div>
        <Toc />
      </div>
    </TocProvider>
  );
};

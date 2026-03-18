"use client";

import { H2, H3, H4, Toc, TocProvider } from "@hyunjinno/react-toc";

export const TocBasic = () => {
  return (
    <TocProvider>
      <div className="mt-5 flex flex-row justify-between p-4">
        <div className="flex flex-col gap-10">
          <H2>1. Heading</H2>
          <H2>2. Heading</H2>
          <H3>2.1. Heading</H3>
          <H3>2.2. Heading</H3>
          <H3>2.3. Heading</H3>
          <H4>2.3.1. Heading</H4>
          <H4>2.3.2. Heading</H4>
          <H4>2.3.3. Heading</H4>
          <H3>2.4. Heading</H3>
          <H2>3. Heading</H2>
        </div>
        <Toc tocClassName="w-32" />
      </div>
    </TocProvider>
  );
};

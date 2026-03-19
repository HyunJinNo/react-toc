"use client";

import { H2, H3, H4, H5, H6, Toc, TocProvider } from "@hyunjinno/react-toc";

export const TocDepth = () => {
  return (
    <TocProvider
      className="mt-5 flex flex-row justify-between p-4"
      maxDepth={2} // H2 ~ H3 only
    >
      <div className="flex flex-col gap-4">
        <H2>1. Heading</H2>
        <H2>2. Heading</H2>
        <H3>2.1. Heading</H3>
        <H4>2.1.1. Heading</H4>
        <H5>2.1.1.1. Heading</H5>
        <H6>2.1.1.1.1. Heading</H6>
        <H3>2.2. Heading</H3>
        <H2>3. Heading</H2>
      </div>
      <Toc className="w-44" expandAll={true} />
    </TocProvider>
  );
};

"use client";

import { H2, H3, H4, H5, H6, Toc, TocProvider } from "@hyunjinno/react-toc";

export const TocMaxDepth = () => {
  return (
    <TocProvider
      className="mt-5 flex flex-row justify-between rounded-lg border border-gray-100 p-4 shadow"
      maxDepth={2} // H2 ~ H3 only
    >
      <div className="flex flex-col gap-4">
        <H2>b.1. Heading</H2>
        <H2>b.2. Heading</H2>
        <H3>b.2.1. Heading</H3>
        <H4>b.2.1.1. Heading</H4>
        <H5>b.2.1.1.1. Heading</H5>
        <H6>b.2.1.1.1.1. Heading</H6>
        <H3>b.2.2. Heading</H3>
        <H2>b.3. Heading</H2>
      </div>
      <Toc className="w-44" expandAll={true} />
    </TocProvider>
  );
};

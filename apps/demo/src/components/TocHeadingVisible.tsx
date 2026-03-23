"use client";

import { H2, Toc, TocProvider } from "@hyunjinno/react-toc";

export const TocHeadingVisible = () => {
  return (
    <TocProvider className="mt-5 flex flex-row justify-between rounded-lg border border-gray-100 p-4 shadow">
      <div className="flex flex-col gap-4">
        <H2>g.1. Heading</H2>
        <H2>g.2. Heading</H2>
        <H2>g.3. Heading</H2>
        <H2>g.4. Heading</H2>
        <H2>g.5. Heading</H2>
      </div>
      <Toc className="w-44" headingVisible={false} />
    </TocProvider>
  );
};

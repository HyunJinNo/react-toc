"use client";

import {
  H2,
  H3,
  H4,
  H5,
  H6,
  TocProvider,
  TocTopBar,
} from "@hyunjinno/react-toc";

export const TocTopBarExample = () => {
  return (
    <TocProvider className="mt-5 flex flex-col gap-4 truncate rounded-lg border border-gray-100 p-4 shadow">
      <TocTopBar title="TocTopBarExample" />
      <div className="flex flex-col gap-4">
        <H2>k.1. Heading</H2>
        <H2>k.2. Heading</H2>
        <H3>k.2.1. Heading</H3>
        <H3>k.2.2. Heading</H3>
        <H3>k.2.3. Heading</H3>
        <H4>k.2.3.1. Heading</H4>
        <H4>k.2.3.2. Heading</H4>
        <H4>k.2.3.3. Heading</H4>
        <H5>k.2.3.3.1. Heading</H5>
        <H6>k.2.3.3.1.1. Heading</H6>
        <H3>k.2.4. Heading</H3>
        <H2>k.3. Heading</H2>
      </div>
    </TocProvider>
  );
};

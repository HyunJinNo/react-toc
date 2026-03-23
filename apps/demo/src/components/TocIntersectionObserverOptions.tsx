"use client";

import { H2, Toc, TocProvider } from "@hyunjinno/react-toc";

export const TocIntersectionObserverOptions = () => {
  return (
    <TocProvider
      className="mt-5 flex flex-row justify-between rounded-lg border border-gray-100 p-4 shadow"
      observerOptions={{ rootMargin: "-50% 0px -50% 0px" }}
    >
      <div className="flex flex-col gap-4">
        <H2>d.1. Heading</H2>
        <H2>d.2. Heading</H2>
        <H2>d.3. Heading</H2>
        <H2>d.4. Heading</H2>
        <H2>d.5. Heading</H2>
      </div>
      <Toc className="w-44" />
    </TocProvider>
  );
};

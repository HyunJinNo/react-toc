"use client";

import { Toc, TocProvider } from "@hyunjinno/react-toc";
import { H2, H3, H4, H5, H6 } from "@hyunjinno/react-toc/heading";
import { useState } from "react";

export const TocOnActiveIdChange = () => {
  const [activeId, setActiveId] = useState("");
  const [activeHeadingContent, setActiveHeadingContent] = useState("");

  const handleActiveIdChange = (id: string, textContent: string) => {
    setActiveId(id);
    setActiveHeadingContent(textContent);
  };

  return (
    <TocProvider
      className="mt-5 flex flex-col rounded-lg border border-gray-100 p-4 shadow"
      observerOptions={{ rootMargin: "-50% 0px -50% 0px" }}
      onActiveIdChange={handleActiveIdChange}
    >
      <p>
        Active ID: <span className="text-blue-500">{activeId}</span>
      </p>
      <p>
        Active Heading Content:{" "}
        <span className="text-blue-500">{activeHeadingContent}</span>
      </p>
      <div className="mt-5 flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <H2>e.1. Heading</H2>
          <H2>e.2. Heading</H2>
          <H3>e.2.1. Heading</H3>
          <H3>e.2.2. Heading</H3>
          <H3>e.2.3. Heading</H3>
          <H4>e.2.3.1. Heading</H4>
          <H4>e.2.3.2. Heading</H4>
          <H4>e.2.3.3. Heading</H4>
          <H5>e.2.3.3.1. Heading</H5>
          <H6>e.2.3.3.1.1. Heading</H6>
          <H3>e.2.4. Heading</H3>
          <H2>e.3. Heading</H2>
        </div>
        <Toc className="w-44" />
      </div>
    </TocProvider>
  );
};

"use client";

import { Toc, TocProvider } from "@hyunjinno/react-toc";
import { H2 } from "@hyunjinno/react-toc/heading";
import { useState } from "react";

export const TocDeps = () => {
  const [headingList, setHeadingList] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setHeadingList([...headingList, crypto.randomUUID()]);
    setCount(count + 1);
  };

  return (
    <TocProvider
      className="mt-5 flex flex-row justify-between rounded-lg border border-gray-100 p-4 shadow"
      deps={[count]}
    >
      <div className="flex flex-col gap-4">
        {headingList.map((value) => (
          <H2 key={value}>{value}</H2>
        ))}
        <button
          className="h-10 w-10 cursor-pointer rounded-full border border-gray-200 bg-white p-1 shadow hover:scale-105"
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <Toc className="w-44" />
    </TocProvider>
  );
};

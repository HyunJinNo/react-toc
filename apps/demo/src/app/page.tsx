"use client";

import { TocProvider, Toc, H2, H3 } from "@hyunjinno/react-toc";

export default function Home() {
  return (
    <div className="border border-red-500">
      <main>
        <TocProvider>
          <Toc />
          <H2>1. TODO</H2>
          <H2>2. TODO</H2>
          <H3>2.1. TODO</H3>
        </TocProvider>
      </main>
    </div>
  );
}

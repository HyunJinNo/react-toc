# react-toc

<div align="center">
  <img src="https://github.com/HyunJinNo/react-toc/blob/main/react-toc.webp" alt="logo" width="256">

![Static Badge](https://img.shields.io/badge/LICENSE-MIT-brightgreen)

</div>

A library that automatically generates a Table of Contents (TOC) from your headings with scroll tracking.

## Installation

npm:

```bash
npm install @hyunjinno/react-toc
```

yarn:

```bash
yarn add @hyunjinno/react-toc
```

pnpm:

```bash
pnpm add @hyunjinno/react-toc
```

## Quick Start

### Step 1.

Import the CSS file at the entry point of the application

```tsx copy
import "@hyunjinno/react-toc/style.css";
```

### Step 2.

Wrap your content with `TocProvider`.
Use the provided heading components (`H2` ~ `H6`) inside a `TocProvider`.
Then place the `Toc` component wherever you want the table of contents to appear inside a `TocProvider`.

```tsx copy filename="TocBasic.tsx"
"use client";

import { H2, H3, H4, H5, H6, Toc, TocProvider } from "@hyunjinno/react-toc";

export const TocBasic = () => {
  return (
    <TocProvider className="mt-5 flex flex-row justify-between rounded-lg border border-gray-100 p-4 shadow">
      <div className="flex flex-col gap-4">
        <H2>a.1. Heading</H2>
        <H2>a.2. Heading</H2>
        <H3>a.2.1. Heading</H3>
        <H3>a.2.2. Heading</H3>
        <H3>a.2.3. Heading</H3>
        <H4>a.2.3.1. Heading</H4>
        <H4>a.2.3.2. Heading</H4>
        <H4>a.2.3.3. Heading</H4>
        <H5>a.2.3.3.1. Heading</H5>
        <H6>a.2.3.3.1.1. Heading</H6>
        <H3>a.2.4. Heading</H3>
        <H2>a.3. Heading</H2>
      </div>
      <Toc className="w-44" />
    </TocProvider>
  );
};
```

## Documentation

TODO

## Features

- 🔍 Automatically builds a nested TOC from `H2` ~ `H6` elements.
- 🧱 Provides ready-to-use heading components (`H2` ~ `H6`) with unique, URL-friendly `id`.
- 🎯 Highlights the active heading as the user scrolls.
- ⚡ Smooth scrolling to sections when a TOC link is clicked.
- 🎨 Fully customizable with CSS classes and scroll options.
- 🧩 Works with React / Next.js.
- ✏️ Written in TypeScript with full type support.

## License

MIT

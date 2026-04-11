import { Toc, TocProvider } from "@hyunjinno/react-toc";
import { H2 } from "@hyunjinno/react-toc/heading";

export const TocCSS = () => {
  return (
    <TocProvider className="mt-5 flex flex-row justify-between rounded-lg border border-gray-100 p-4 shadow">
      <div className="flex flex-col gap-4">
        <H2>b.1. Heading</H2>
        <H2>b.2. Heading</H2>
        <H2>b.3. Heading</H2>
        <H2>b.4. Heading</H2>
        <H2>b.5. Heading</H2>
      </div>
      <Toc
        className="w-60 bg-blue-50"
        headingClassName="text-teal-500 text-xl pb-5"
        listClassName="-mt-2"
        linkClassName="text-blue-300"
        activeClassName="font-semibold text-lg"
      />
    </TocProvider>
  );
};

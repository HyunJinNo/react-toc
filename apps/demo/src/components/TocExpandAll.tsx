import { Toc, TocProvider } from "@hyunjinno/react-toc";
import { H2, H3, H4, H5, H6 } from "@hyunjinno/react-toc/heading";

export const TocExpandAll = () => {
  return (
    <TocProvider className="mt-5 flex flex-row justify-between rounded-lg border border-gray-100 p-4 shadow">
      <div className="flex flex-col gap-4">
        <H2>i.1. Heading</H2>
        <H2>i.2. Heading</H2>
        <H3>i.2.1. Heading</H3>
        <H3>i.2.2. Heading</H3>
        <H3>i.2.3. Heading</H3>
        <H4>i.2.3.1. Heading</H4>
        <H4>i.2.3.2. Heading</H4>
        <H4>i.2.3.3. Heading</H4>
        <H5>i.2.3.3.1. Heading</H5>
        <H6>i.2.3.3.1.1. Heading</H6>
        <H3>i.2.4. Heading</H3>
        <H2>i.3. Heading</H2>
      </div>
      <Toc className="w-44" expandAll={true} />
    </TocProvider>
  );
};

import { useContext } from "react";
import { TocList } from "./TocList";
import { TocContext } from "./TocContext";

export const Toc = () => {
  const { activeId, tocItemList } = useContext(TocContext);

  return (
    <section
      className="animate-fade-up sticky top-12 flex w-full flex-col gap-4 border-l border-gray-200 pb-4"
      style={{ border: "1px solid red" }}
    >
      <h2 className="pl-4 font-medium text-[#585858]">Contents</h2>
      <nav className="text-custom-gray text-sm">
        <ul className="flex flex-col gap-2.5">
          {tocItemList.map((tocItem) => (
            <TocList key={tocItem.id} activeId={activeId} tocItem={tocItem} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

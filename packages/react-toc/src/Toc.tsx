import { useContext } from "react";
import { TocList } from "./TocList";
import { TocContext } from "./TocContext";

export const Toc = () => {
  const { activeId, tocItemList } = useContext(TocContext);

  return (
    <section className="react-toc-wrapper">
      <h2 className="react-toc-wrapper-heading">Contents</h2>
      <nav>
        <ul className="react-toc-list">
          {tocItemList.map((tocItem) => (
            <TocList key={tocItem.id} activeId={activeId} tocItem={tocItem} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

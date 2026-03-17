import { useContext } from "react";
import { TocList } from "./TocList";
import { TocContext } from "./TocContext";
import clsx from "clsx";

interface TocProps {
  tocClassName?: string;
  headingClassName?: string;
}

export const Toc = ({ tocClassName, headingClassName }: TocProps) => {
  const { activeId, tocItemList } = useContext(TocContext);

  return (
    <section className={clsx("react-toc-wrapper", tocClassName)}>
      <h2 className={clsx("react-toc-wrapper-heading", headingClassName)}>
        Contents
      </h2>
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

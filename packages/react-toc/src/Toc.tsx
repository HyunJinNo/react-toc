import { useContext } from "react";
import { TocList } from "./TocList";
import { TocContext } from "./TocContext";
import clsx from "clsx";

interface TocProps {
  tocClassName?: string;
  headingClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
}

export const Toc = ({
  tocClassName,
  headingClassName,
  itemClassName,
  linkClassName,
  activeClassName,
}: TocProps) => {
  const { activeId, tocItemList } = useContext(TocContext);

  return (
    <section className={clsx("react-toc-wrapper", tocClassName)}>
      <h2 className={clsx("react-toc-wrapper-heading", headingClassName)}>
        Contents
      </h2>
      <nav>
        <ul className="react-toc-list">
          {tocItemList.map((tocItem) => (
            <TocList
              key={tocItem.id}
              activeId={activeId}
              tocItem={tocItem}
              itemClassName={itemClassName}
              linkClassName={linkClassName}
              activeClassName={activeClassName}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
};

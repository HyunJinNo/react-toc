import { useContext } from "react";
import { TocList } from "./TocList";
import { TocContext } from "./TocContext";
import clsx from "clsx";

interface TocProps {
  className?: string;
  headingClassName?: string;
  listClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
  headingText?: string;
  headingVisible?: boolean;
  scrollToOptions?: ScrollToOptions;
  expandAll?: boolean;
}

export const Toc = ({
  className,
  headingClassName,
  listClassName,
  linkClassName,
  activeClassName,
  headingText,
  headingVisible = true,
  scrollToOptions,
  expandAll = false,
}: TocProps) => {
  const { activeId, tocItemList } = useContext(TocContext);

  return (
    <section className={clsx("react-toc-wrapper", className)}>
      {headingVisible && (
        <h2 className={clsx("react-toc-wrapper-heading", headingClassName)}>
          {headingText || "Contents"}
        </h2>
      )}
      <nav>
        <ul className={clsx("react-toc-list", listClassName)}>
          {tocItemList.map((tocItem) => (
            <TocList
              key={tocItem.id}
              activeId={activeId}
              tocItem={tocItem}
              listClassName={listClassName}
              linkClassName={linkClassName}
              activeClassName={activeClassName}
              scrollToOptions={scrollToOptions}
              expandAll={expandAll}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
};

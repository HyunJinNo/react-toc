import { useContext } from "react";
import { TocList } from "./TocList";
import { TocContext } from "./TocContext";
import clsx from "clsx";

interface TocProps {
  className?: string;
  headingClassName?: string;
  headingText?: string;
  headingVisible?: boolean;
  listClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
  offsetTop?: number;
  offsetLeft?: number;
  scrollBehavior?: ScrollBehavior;
  expandAll?: boolean;
}

export const Toc = ({
  className,
  headingClassName,
  headingText = "Contents",
  headingVisible = true,
  listClassName,
  linkClassName,
  activeClassName,
  offsetTop = 30,
  offsetLeft,
  scrollBehavior = "smooth",
  expandAll = false,
}: TocProps) => {
  const { activeId, tocItemList } = useContext(TocContext);

  return (
    <section className={clsx("react-toc-wrapper", className)}>
      {headingVisible && (
        <h2 className={clsx("react-toc-wrapper-heading", headingClassName)}>
          {headingText}
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
              offsetTop={offsetTop}
              offsetLeft={offsetLeft}
              scrollBehavior={scrollBehavior}
              expandAll={expandAll}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
};

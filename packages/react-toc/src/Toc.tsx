import { useContext } from "react";
import { TocList } from "./TocList";
import { TocContext } from "./TocContext";
import clsx from "clsx";

interface TocProps {
  /**
   * CSS class applied to the outer `<section>` element.
   */
  className?: string;

  /**
   * CSS class applied to the optional heading (ex. "Contents").
   */
  headingClassName?: string;

  /**
   * Text for the optional heading.
   *
   * default: "Contents"
   */
  headingText?: string;

  /**
   * show/hide the heading above the TOC.
   *
   * default: true
   */
  headingVisible?: boolean;

  /**
   * CSS class applied to all `<ul>` elements in the TOC.
   */
  listClassName?: string;

  /**
   * CSS class applied to all `<a>` links.
   */
  linkClassName?: string;

  /**
   * Additional CSS class applied to the active link.
   */
  activeClassName?: string;

  /**
   * Vertical offset applied when scrolling to a heading.
   *
   * default: 30
   */
  offsetTop?: number;

  /**
   * Horizontal scroll offset when navigating to a heading.
   *
   * default: 0
   */
  offsetLeft?: number;

  /**
   * Determines whether scrolling is instant or animates smoothly.
   *
   * default: "smooth"
   */
  scrollBehavior?: ScrollBehavior;

  /**
   * If true, always show all nested levels. If false, only expand the branch containing the active heading.
   *
   * default: false
   */
  expandAll?: boolean;

  /**
   * Always expand TOC up to this depth (1 = H2, 2 = H3, etc.).
   *
   * default: 1
   */
  expandDepth?: 1 | 2 | 3 | 4 | 5;
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
  offsetLeft = 0,
  scrollBehavior = "smooth",
  expandAll = false,
  expandDepth = 1,
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
              expandDepth={expandDepth}
              depth={1}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
};

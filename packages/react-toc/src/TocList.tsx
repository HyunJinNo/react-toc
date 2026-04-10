import { TocItem } from "./types";

interface TocListProps {
  activeId: string;
  tocItem: TocItem;
  listClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
  offsetTop?: number;
  offsetLeft?: number;
  scrollBehavior?: ScrollBehavior;
  expandAll?: boolean;
  expandDepth: 1 | 2 | 3 | 4 | 5;
  depth: number;
}

export const TocList = ({
  activeId,
  tocItem,
  listClassName,
  linkClassName,
  activeClassName,
  offsetTop,
  offsetLeft,
  scrollBehavior,
  expandAll,
  expandDepth,
  depth,
}: TocListProps) => {
  const containsActive = (tocItem: TocItem): boolean => {
    if (activeId === tocItem.id) {
      return true;
    }

    return tocItem.children.some((child) => containsActive(child));
  };

  const levelClass = {
    H2: "react-toc-h2",
    H3: "react-toc-h3",
    H4: "react-toc-h4",
    H5: "react-toc-h5",
    H6: "react-toc-h6",
  }[tocItem.tagName];

  return (
    <li
      key={tocItem.id}
      className={["react-toc-list", listClassName].join(" ")}
    >
      <a
        className={[
          "react-toc-link",
          levelClass,
          linkClassName,
          activeClassName,
          activeId === tocItem.id && "react-toc-active",
        ].join(" ")}
        href={`#${tocItem.id}`}
        onClick={(e) => {
          e.preventDefault();

          const element = document.getElementById(tocItem.id);

          if (element) {
            // 요소의 위치를 얻어서 위로 스크롤 조정
            window.scrollTo({
              top: element.offsetTop - (offsetTop ?? 0),
              left: offsetLeft,
              behavior: scrollBehavior,
            });

            window.history.pushState(null, "", `#${tocItem.id}`);
          }
        }}
      >
        {tocItem.textContent}
      </a>
      {tocItem.children.length !== 0 &&
        (expandAll || containsActive(tocItem) || depth + 1 <= expandDepth) && (
          <ul className={["react-toc-list", listClassName].join(" ")}>
            {tocItem.children.map((child) => (
              <TocList
                key={child.id}
                activeId={activeId}
                tocItem={child}
                listClassName={listClassName}
                linkClassName={linkClassName}
                activeClassName={activeClassName}
                offsetTop={offsetTop}
                offsetLeft={offsetLeft}
                scrollBehavior={scrollBehavior}
                expandAll={expandAll}
                expandDepth={expandDepth}
                depth={depth + 1}
              />
            ))}
          </ul>
        )}
    </li>
  );
};

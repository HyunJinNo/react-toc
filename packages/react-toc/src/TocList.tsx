import clsx from "clsx";
import { TocItem } from "./types";

interface TocListProps {
  activeId: string;
  tocItem: TocItem;
  itemClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
}

export const TocList = ({
  activeId,
  tocItem,
  itemClassName,
  linkClassName,
  activeClassName,
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
    <li key={tocItem.id} className={clsx("react-toc-item", itemClassName)}>
      <a
        className={clsx(
          "react-toc-link",
          levelClass,
          linkClassName,
          activeId === tocItem.id && ["react-toc-active", activeClassName],
        )}
        href={`#${tocItem.id}`}
        onClick={(e) => {
          e.preventDefault();

          const element = document.getElementById(tocItem.id);

          if (element) {
            // 요소의 위치를 얻어서 위로 스크롤 조정
            window.scrollTo({
              top: element.offsetTop - 30,
              behavior: "smooth",
            });

            window.history.pushState(null, "", `#${tocItem.id}`);
          }
        }}
      >
        {tocItem.textContent}
      </a>
      {tocItem.children.length !== 0 && containsActive(tocItem) && (
        <ul className="react-toc-list">
          {tocItem.children.map((child) => (
            <TocList key={child.id} activeId={activeId} tocItem={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

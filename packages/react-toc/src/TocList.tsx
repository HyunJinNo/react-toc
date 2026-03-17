import { TocItem } from "./types";

interface TocListProps {
  activeId: string;
  tocItem: TocItem;
}

export const TocList = ({ activeId, tocItem }: TocListProps) => {
  const containsActive = (tocItem: TocItem): boolean => {
    if (activeId === tocItem.id) {
      return true;
    }

    return tocItem.children.some((child) => containsActive(child));
  };

  return (
    <li key={tocItem.id} className="react-toc-item">
      <a
        className={[
          tocItem.tagName === "H2" && "react-toc-h2",
          tocItem.tagName === "H3" && "react-toc-h3",
          tocItem.tagName === "H4" && "react-toc-h4",
          tocItem.tagName === "H5" && "react-toc-h5",
          tocItem.tagName === "H6" && "react-toc-h6",
          activeId === tocItem.id && "react-toc-active",
          "react-toc-link",
        ].join(" ")}
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

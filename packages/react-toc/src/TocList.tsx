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
    <li key={tocItem.id} className="flex flex-col gap-2.5">
      <a
        className={[
          tocItem.tagName === "H2" && "pl-4",
          tocItem.tagName === "H3" && "pl-7",
          tocItem.tagName === "H4" && "pl-10",
          tocItem.tagName === "H5" && "pl-13",
          activeId === tocItem.id &&
            "text-custom-blue border-custom-blue -ml-px border-l font-medium dark:border-blue-300 dark:text-blue-300",
          "hover:text-custom-blue truncate hover:dark:text-blue-300",
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
        <ul className="flex flex-col gap-2.5">
          {tocItem.children.map((child) => (
            <TocList key={child.id} activeId={activeId} tocItem={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

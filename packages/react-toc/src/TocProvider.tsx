import { DependencyList, useEffect, useRef, useState } from "react";
import { TocItem } from "./types";
import { TocContext } from "./TocContext";

interface TocProviderProps {
  children: React.ReactNode;
  className?: string;

  /**
   * Maximum heading level to include (`1` = only H2, `2` = H2 ~ H3, etc.).
   *
   * default: 5
   */
  maxDepth?: 1 | 2 | 3 | 4 | 5;

  /**
   * Options passed to the `IntersectionObserver` used for active detection.
   *
   * default: `{ rootMargin: "-20% 0px -80% 0px" }`
   */
  observerOptions?: IntersectionObserverInit;

  /**
   * Additional dependencies that will cause the TOC to be rebuilt (like the `useEffect` deps array).
   */
  deps?: DependencyList;

  /**
   * Callback fired when the active heading changes.
   */
  onActiveIdChange?: (id: string, textContent: string) => void;
}

export const TocProvider = ({
  children,
  className,
  maxDepth = 5,
  observerOptions,
  deps,
  onActiveIdChange,
}: TocProviderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("");
  const [tocItemList, setTocItemList] = useState<TocItem[]>([]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            onActiveIdChange?.(entry.target.id, entry.target.textContent);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px", ...observerOptions },
    );

    const arr: TocItem[] = [];

    for (const element of ref.current.querySelectorAll(".toc-heading")) {
      switch (element.tagName) {
        case "H2":
          arr.push({
            tagName: element.tagName,
            textContent: element.textContent,
            id: element.id,
            children: [],
          });
          observer.observe(element);
          break;
        case "H3":
          if (maxDepth >= 2) {
            arr[arr.length - 1].children.push({
              tagName: element.tagName,
              textContent: element.textContent,
              id: element.id,
              children: [],
            });
            observer.observe(element);
          }
          break;
        case "H4":
          if (maxDepth >= 3) {
            arr[arr.length - 1].children[
              arr[arr.length - 1].children.length - 1
            ].children.push({
              tagName: element.tagName,
              textContent: element.textContent,
              id: element.id,
              children: [],
            });
            observer.observe(element);
          }
          break;
        case "H5":
          if (maxDepth >= 4) {
            arr[arr.length - 1].children[
              arr[arr.length - 1].children.length - 1
            ].children[
              arr[arr.length - 1].children[
                arr[arr.length - 1].children.length - 1
              ].children.length - 1
            ].children.push({
              tagName: element.tagName,
              textContent: element.textContent,
              id: element.id,
              children: [],
            });
            observer.observe(element);
          }
          break;
        case "H6":
          if (maxDepth >= 5) {
            arr[arr.length - 1].children[
              arr[arr.length - 1].children.length - 1
            ].children[
              arr[arr.length - 1].children[
                arr[arr.length - 1].children.length - 1
              ].children.length - 1
            ].children[
              arr[arr.length - 1].children[
                arr[arr.length - 1].children.length - 1
              ].children[
                arr[arr.length - 1].children[
                  arr[arr.length - 1].children.length - 1
                ].children.length - 1
              ].children.length - 1
            ].children.push({
              tagName: element.tagName,
              textContent: element.textContent,
              id: element.id,
              children: [],
            });
            observer.observe(element);
          }
          break;
        default:
          break;
      }
    }

    setTocItemList(arr);

    return () => {
      observer.disconnect();
    };
  }, [maxDepth, observerOptions, onActiveIdChange, ...(deps ?? [])]);

  return (
    <TocContext value={{ activeId, tocItemList }}>
      <div className={className} ref={ref}>
        {children}
      </div>
    </TocContext>
  );
};

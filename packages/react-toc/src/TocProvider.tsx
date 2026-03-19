import { DependencyList, useEffect, useRef, useState } from "react";
import { TocItem } from "./types";
import { TocContext } from "./TocContext";

interface TocProviderProps {
  children: React.ReactNode;
  className?: string;
  maxDepth?: 1 | 2 | 3 | 4 | 5;
  observerOptions?: IntersectionObserverInit;
  deps?: DependencyList;
  onActiveIdChange?: (id: string) => void;
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
            onActiveIdChange?.(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px", ...observerOptions },
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

import { useEffect, useRef, useState } from "react";
import { TocItem } from "./types";
import { TocContext } from "./TocContext";

interface TocProviderProps {
  children: React.ReactNode;
}

export const TocProvider = ({ children }: TocProviderProps) => {
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
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" },
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
          arr[arr.length - 1].children.push({
            tagName: element.tagName,
            textContent: element.textContent,
            id: element.id,
            children: [],
          });
          observer.observe(element);
          break;
        case "H4":
          arr[arr.length - 1].children[
            arr[arr.length - 1].children.length - 1
          ].children.push({
            tagName: element.tagName,
            textContent: element.textContent,
            id: element.id,
            children: [],
          });
          observer.observe(element);
          break;
        case "H5":
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
          break;
        default:
          break;
      }
    }

    setTocItemList(arr);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <TocContext value={{ activeId, tocItemList }}>
      <div ref={ref}>{children}</div>
    </TocContext>
  );
};

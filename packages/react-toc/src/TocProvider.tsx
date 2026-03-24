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
   * Additional dependencies that will cause the TOC to be rebuilt (like the useEffect deps array).
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
  observerOptions = { rootMargin: "-20% 0px -80% 0px" },
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          onActiveIdChange?.(entry.target.id, entry.target.textContent);
        }
      });
    }, observerOptions);

    const elementList = Array.from(
      ref.current.querySelectorAll(".toc-heading"),
    ) as HTMLElement[];

    const toc: TocItem[] = [];
    const stack: TocItem[] = [];

    const getDepth = (tagName: string) => {
      // H2 → 0, H3 → 1, ..., H6 → 4
      return Number(tagName.replace("H", "")) - 2;
    };

    elementList.forEach((element) => {
      const currentDepth = getDepth(element.tagName);

      if (currentDepth >= maxDepth) {
        return;
      }

      if (
        element.tagName !== "H2" &&
        element.tagName !== "H3" &&
        element.tagName !== "H4" &&
        element.tagName !== "H5" &&
        element.tagName !== "H6"
      ) {
        return;
      }

      const item: TocItem = {
        tagName: element.tagName,
        textContent: element.textContent,
        id: element.id,
        children: [],
      };

      observer.observe(element);

      while (stack.length > currentDepth) {
        stack.pop();
      }

      if (stack.length === 0) {
        toc.push(item);
      } else {
        stack[stack.length - 1].children.push(item);
      }

      stack.push(item);
    });

    setTocItemList(toc);

    return () => {
      observer.disconnect();
    };
  }, [maxDepth, ...(deps ?? [])]);

  return (
    <TocContext value={{ activeId, tocItemList }}>
      <div className={className} ref={ref}>
        {children}
      </div>
    </TocContext>
  );
};

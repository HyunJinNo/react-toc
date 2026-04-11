import { TocItem } from "@/types/types";
import { createContext } from "react";

export const TocContext = createContext<{
  activeId: string;
  tocItemList: TocItem[];
}>({
  activeId: "",
  tocItemList: [],
});

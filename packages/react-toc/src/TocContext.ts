import { createContext } from "react";
import { TocItem } from "./types";

export const TocContext = createContext<{
  activeId: string;
  tocItemList: TocItem[];
}>({
  activeId: "",
  tocItemList: [],
});

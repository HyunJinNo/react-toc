export interface TocItem {
  tagName: "H2" | "H3" | "H4" | "H5" | "H6";
  textContent: string;
  id: string;
  children: TocItem[];
}

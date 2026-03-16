export interface TocItem {
  tagName: string;
  textContent: string;
  id: string;
  children: TocItem[];
}

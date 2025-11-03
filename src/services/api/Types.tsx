export interface Page {
  id: string;
  pageNumber: number;
  title: string;
  content: string;
  imageUrl: string;
  outgoingLinks: PageLink[];
  incomingLinks: PageLink[];
}

export interface PageLink {
  id: string;
  choice: string;
  fromPageId: string;
  fromPage: Page;
  toPageId: string;
  toPage: Page;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  pages: Page[];
}

export interface Page {
  pageId: string;
  pageNumber: number;
  title: string;
  description: string;
  imgUrl: string;
  outgoingPageLinks: PageLink[];
  incomingPageLinks: PageLink[];
}

export interface PageLink {
  pageLinkId: string;
  choiceText: string;
  fromPageId: string;
  fromPage: Page;
  toPageId: string;
  toPage: Page;
}

export interface Story {
  storyId: string;
  title: string;
  description: string;
  imgUrl: string;
  pages: Page[];
}

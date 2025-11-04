import axios from "axios";
import type { Page, PageLink } from "./Types";


const API_BASE_URL = 'https://localhost:7206/api';

export const pagesApi = {
  // Get all pages
  async getAllPages(): Promise<Page[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/Pages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      throw error;
    }
  },

    // Get a page by its ID
  async getPageById(id: string): Promise<Page | null> {
    try {
      const response = await axios.get(`${API_BASE_URL}/Pages/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching page:', error);
      return null;
    }
  },

    // Get PageLinks for a specific page
  async getPageLinks(pageId: string): Promise<PageLink[]> {
    try {
      // Get all PageLinks and filter by fromPageId
      const response = await axios.get(`${API_BASE_URL}/PageLinks`);
      const allLinks = response.data;
      
      // Filter by fromPageId for this specific page
      const pageLinks = allLinks.filter((link: PageLink) => {
        const matches = link.fromPageId === pageId;
        if (matches) {
          console.log(`Found matching link: "${link.choiceText}" from ${link.fromPageId} to ${link.toPageId}`);
        }
        return matches;
      });
      
      // Log the specific links for debugging
      pageLinks.forEach((link: PageLink, index: number) => {
        console.log(`  ${index + 1}. "${link.choiceText}" → ${link.toPageId}`);
      });
      
      // Validate link count (should be 0-4, where 0 means end of story)
      if (pageLinks.length > 4) {
        console.error(`oo many links found: ${pageLinks.length} (max 4 expected for page ${pageId})`);
        console.error('This indicates a data integrity issue or incorrect filtering');
        return pageLinks.slice(0, 4); // Safety measure but this shouldn't happen
      }
      
      if (pageLinks.length === 0) {
        console.log(`Page ${pageId} has no outgoing links (end of story)`);
      } else {
        console.log(`Page ${pageId} has ${pageLinks.length} choice(s)`);
      }
      
      return pageLinks;
      
    } catch (error) {
      console.error(`Error fetching page links for ${pageId}:`, error);
      return [];
    }
  },

};

export default pagesApi;
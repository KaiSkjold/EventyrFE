import { type Story } from './Types';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7206/api';

export const storiesApi = {
  // Get all stories
  async getAllStories(): Promise<Story[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/Stories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching stories:', error);
      throw error;
    }
  }

};
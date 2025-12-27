// API Configuration
// In production, set VITE_API_URL environment variable to your server URL
// For local development, defaults to http://localhost:3001

const getApiUrl = () => {
  // Check for environment variable (set in Netlify or .env file)
  if (import.meta.env.VITE_API_URL) {
    let url = import.meta.env.VITE_API_URL.trim();
    
    // Ensure URL has protocol (https for production, http for localhost)
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      // If it's localhost, use http, otherwise use https
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        url = `http://${url}`;
      } else {
        url = `https://${url}`;
      }
    }
    
    // Remove trailing slash
    url = url.replace(/\/$/, '');
    
    return url;
  }
  
  // Default to localhost for development
  return 'http://localhost:3001';
};

export const API_URL = getApiUrl();
// Socket.io uses the same base URL as the API (without /api path)
export const SOCKET_URL = getApiUrl();

// Helper function to build API endpoints
export const apiEndpoints = {
  createMeeting: () => `${API_URL}/api/meeting/create`,
  checkMeeting: (meetingId) => `${API_URL}/api/meeting/${meetingId}`,
  streamToken: () => `${API_URL}/api/stream/token`,
  zegoToken: () => `${API_URL}/api/zego/token`,
};


export const ERRORS = {
  NOT_FOUND: {
    title: "404 - Page not found",
    message: "The page you are looking for does not exist",
  },
  FORBIDDEN: {
    title: "401 - Page Forbidden",
    message: "You dont have access to this page",
  },
} as const;

export const ROUTES = {
  LANDING: "/",
  LOGIN: "/login",
  SIGNUP: "/login",
  ALPHA: "/alpha",
  BETA: "/beta",
} as const;

export const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  USER: {
    SIGN_IN: `${API_BASE}/user/sign-in`,
    SIGN_UP: `${API_BASE}/user/sign-up`,
  },
  ALPHA: {
    LIST: `${API_BASE}/alpha`,
    GET: (id: string) => `${API_BASE}/alpha/${id}`,
    GET_WITH_BETA: `${API_BASE}/alpha/sign-up`,
    CREATE: `${API_BASE}/alpha`,
    UPDATE: (id: string) => `${API_BASE}/alpha/${id}`,
    DELETE: (id: string) => `${API_BASE}/alpha/${id}`,
  },
};

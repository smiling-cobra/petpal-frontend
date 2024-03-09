export const useSessionStorage = () => {
  const get = (key: string) => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error: any) {
      console.error('Error getting item from session storage:', error.message);
      return null;
    }
  };

  const set = (key: string, value: string) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
      console.error('Error setting item in session storage:', error.message);
    }
  };

  const remove = (key: string) => {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error: any) {
      console.error('Error removing item from session storage:', error.message);
    }
  };

  return { get, set, remove };
};

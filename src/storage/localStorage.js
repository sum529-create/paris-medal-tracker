const getLocalStorage = (key) => {
  try {
    if (!key) return null;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Failed to Get Local Storage: ", error);
  }
};

const setLocalStorage = (key, value) => {
  try {
    if (key && value) localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Faild to Set Local Storage", error);
  }
};

export { getLocalStorage, setLocalStorage };

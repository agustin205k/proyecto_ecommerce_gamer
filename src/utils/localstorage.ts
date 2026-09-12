const setLS = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLS = <T>(key: string): T | [] => {
  const data = localStorage.getItem(key);
  if (!data?.length) return [];
  return data? (JSON.parse(data) as T) : [];
};

export { getLS, setLS };
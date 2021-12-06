const localStorage = window.localStorage;
const DEFAULT = "Default";

export const getStorage = (storageName = DEFAULT) => {
  try {
    return JSON.parse(localStorage.getItem(storageName));
  } catch {
    return;
  }
};

export const isStorage = (storageName = DEFAULT) => {
  return localStorage.getItem(storageName);
};

export const setStorage = (storageName = DEFAULT, value = "") => {
  localStorage.setItem(storageName, JSON.stringify(value));
};

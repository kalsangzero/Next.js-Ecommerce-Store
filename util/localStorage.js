export function getLocalStorage(key) {
  // not breaking app and catching the error
  try {
    return JSON.parse(window.localStorage[key]);
  } catch (error) {
    return undefined;
  }
}

export function setLocalStorage(key, value) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

import { TProductLocalStorage } from '../types/product.type';

function setLocalStorage (key: string, data: TProductLocalStorage) {
  return localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage<T> (key: string): T | undefined {
  const myStorage = localStorage.getItem(key);

  if(!myStorage) {
    return undefined;
  }

  return JSON.parse(myStorage) as T;
}

export { setLocalStorage, getLocalStorage };


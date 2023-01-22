import { useState } from 'react';

export type StorageKeys = 'stage' | 'questionIndex';

type StorageSetter<T> = (arg: T) => void;
type StorageRemover = () => void;

export function useLocalStorage<TValue extends string>(
  storageKey: StorageKeys,
): [
    TValue | null, //
    StorageSetter<TValue>,
    StorageRemover,
  ] {
  const value = localStorage.getItem(storageKey) as TValue;
  const [state, setState] = useState<TValue | null>(value);

  const setValue = (newValue: TValue): void => {
    localStorage.setItem(storageKey, newValue);
    setState(newValue);
  };
  const removeValue = (): void => {
    localStorage.removeItem(storageKey);
    setState(null);
  };

  return [state, setValue, removeValue];
}

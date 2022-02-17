import { atom, selector } from 'recoil';
import { Data } from '../interfaces/interfaces';
import dataJson from '../data.json';

export const dataAtom = atom({
  key: 'dataState',
  default: {} as Data,
});

export const dataState = selector({
  key: 'dataSelector',
  get: () => {
    const fetchedData = dataJson;
    return fetchedData;
  },
});

export const updatedData = selector({
  key: 'updateData',
  get: ({ get }) => {
    const initialData = get(dataState);
    const individualData = get(dataAtom);

    return individualData.comments ? individualData : initialData;
  },
});

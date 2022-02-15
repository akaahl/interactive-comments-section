import { Suspense, useEffect, useState } from 'react';
import Main from './components/Main/Main';
import { atom, selector, selectorFamily, useRecoilState } from 'recoil';
// import { CommentsProps } from './components/Main/Comments/Comments';
import { Data } from './interfaces/interfaces';

export const dataAtom = atom({
  key: 'dataState',
  default: {} as Data,
});

export const dataState = selector({
  key: 'dataSelector',
  get: async ({ get }) => {
    const fetchedData = await fetch('../data.json').then((res) => res.json());
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

function App() {
  return (
    <div
      className="min-w-screen flex min-h-screen justify-center bg-neutral-very-light-gray 
      py-16 font-rubik"
    >
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Main />
      {/* </Suspense> */}
    </div>
  );
}

export default App;

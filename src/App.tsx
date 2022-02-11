import { Suspense, useEffect, useState } from 'react';
import Main from './components/Main/Main';
import { atom, selector, selectorFamily, useRecoilState } from 'recoil';
import { CommentsProps } from './components/Main/Comments/Comments';
import Modal from './components/Modal/Modal';

export interface Data {
  comments: CommentsProps[];
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export const dataAtom = atom({
  key: 'dataState',
  default: {} as Data,
});

export const dataState = selector({
  key: 'dataSelector',
  get: async () => {
    const fetchedData = await fetch('../data.json').then((res) => res.json());

    return fetchedData;
  },
});

export const updateData = selector({
  key: 'updateData',
  get: ({ get }) => get(dataState),
  set: ({ get, set }, newValue) => set(get(dataState), newValue),
});

function App() {
  // const [data, setData] = useRecoilState(dataAtom);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('../data.json');
  //     const data = await res.json();

  //     setData(data);
  //   };

  //   fetchData();
  // }, []);

  // console.log('1 2 3');

  return (
    <div
      className="min-w-screen flex min-h-screen justify-center bg-neutral-very-light-gray 
      py-16 font-rubik"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
      {/* <Modal /> */}
    </div>
  );
}

export default App;

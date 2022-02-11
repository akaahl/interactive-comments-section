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
  get: async ({ get }) => {
    const fetchedData = await fetch('../data.json').then((res) => res.json());

    // const individualData = get(dataAtom);

    // return individualData.comments ? individualData : fetchedData;
    return fetchedData;
  },
  // set: ({ set }, newValue) => {
  //   set(dataState, newValue);
  // },
});

export const updateData = selector<Data>({
  key: 'updateData',
  get: ({ get }) => {
    const initialData = get(dataState);
    const individualData = get(dataAtom);

    return individualData.comments ? individualData : initialData;
  },
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

import { useEffect, useState } from 'react';
import Main from './components/Main/Main';
import { atom, useRecoilState } from 'recoil';
import { CommentsProps } from './components/Main/Comments/Comments';
import Modal from './components/Modal/Modal';

interface Data {
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

function App() {
  const [data, setData] = useRecoilState(dataAtom);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../data.json');
      const data = await res.json();

      setData(data);
    };

    fetchData();
  }, []);

  console.log('1 2 3');

  return (
    <div
      className="min-w-screen flex min-h-screen justify-center bg-neutral-very-light-gray 
      py-16 font-rubik"
    >
      <Main />
      {/* <Modal /> */}
    </div>
  );
}

export default App;

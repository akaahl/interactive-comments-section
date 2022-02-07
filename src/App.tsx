import { useEffect } from 'react';
import Main from './components/Main/Main';
import { atom, useRecoilState } from 'recoil';

interface Data {
  comments: [];
  currentUser: {
    image?: {
      png: string;
      webp: string;
    };
    username?: string;
  };
}

export const dataAtom = atom({
  key: 'dataAtom',
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

  return (
    <div
      className="min-w-screen flex min-h-screen justify-center bg-neutral-very-light-gray 
      py-16 font-rubik"
    >
      <Main />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Comments from "./Comments/Comments";

interface Data {
  comments: [];
  currentUser: {};
}

const Main = () => {
  const [data, setData] = useState<Data>({ comments: [], currentUser: {} });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../data.json");
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <main className="w-1/2 h-auto">
      <Comments />
    </main>
  );
};

export default Main;

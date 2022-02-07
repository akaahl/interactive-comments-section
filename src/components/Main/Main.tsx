import React, { useEffect, useState } from 'react';
import Comments from './Comments/Comments';
import NewComment from './NewComment/NewComment';

interface Data {
  comments: [];
  currentUser: {};
}

const Main = () => {
  const [data, setData] = useState<Data>({ comments: [], currentUser: {} });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../../data.json');
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <main className="h-auto w-[55%]">
      {data.comments.length &&
        data.comments.map(
          ({ id, content, createdAt, score, replies, user }, index) => (
            <Comments
              key={index}
              id={id}
              content={content}
              createdAt={createdAt}
              score={score}
              replies={replies}
              user={user}
            />
          )
        )}
      <NewComment currentUser={data.currentUser} />
    </main>
  );
};

export default Main;

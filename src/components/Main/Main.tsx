import React, { Suspense } from 'react';
import Comments from './Comments/Comments';
import NewComment from './NewComment/NewComment';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Data, dataAtom, dataState, updateData } from '../../App';

const Main = () => {
  const data = useRecoilValue<Data>(dataState);
  const [newData, setNewData] = useRecoilState(updateData);
  // setNewData(data);

  // console.log(setNewData);
  // console.log(data, '1');

  return (
    <main className="h-auto w-[700px]">
      {data.comments &&
        data.comments.map(
          (
            { id, content, createdAt, score, replies, user, newComment },
            index
          ) => (
            <Comments
              key={index}
              id={id}
              content={content}
              createdAt={createdAt}
              score={score}
              replies={replies}
              user={user}
              newComment={newComment}
            />
          )
        )}

      <NewComment />
    </main>
  );
};

export default Main;

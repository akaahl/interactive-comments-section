import React, { Suspense } from 'react';
import Comments from './Comments/Comments';
import NewComment from './NewComment/NewComment';
import { useRecoilValue } from 'recoil';
import { dataAtom } from '../../App';

const Main = () => {
  const data = useRecoilValue(dataAtom);

  console.log(data);

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

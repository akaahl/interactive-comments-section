import React from 'react';
import Comments from './Comments/Comments';
import NewComment from './NewComment/NewComment';
import { useRecoilValue } from 'recoil';
import { dataAtom } from '../../App';

const Main = () => {
  const data = useRecoilValue(dataAtom);

  console.log(data);

  return (
    <main className="h-auto w-[55%]">
      {data?.comments &&
        React.Children.toArray(
          data.comments.map(
            ({ id, content, createdAt, score, replies, user }) => (
              <Comments
                id={id}
                content={content}
                createdAt={createdAt}
                score={score}
                replies={replies}
                user={user}
              />
            )
          )
        )}
      <NewComment />
    </main>
  );
};

export default Main;

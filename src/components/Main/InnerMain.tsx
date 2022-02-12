import React from 'react';
import { useRecoilValue } from 'recoil';
import { Data, updatedData } from '../../App';
import Comments from './Comments/Comments';

const InnerMain = () => {
  const data = useRecoilValue<Data>(updatedData);

  return (
    <>
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
    </>
  );
};

export default InnerMain;

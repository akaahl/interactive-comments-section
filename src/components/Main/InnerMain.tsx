import { useRecoilValue } from 'recoil';
import { Data } from '../../interfaces/interfaces';
import Comments from './Comments/Comments';
import { updatedData } from '../../stores/stores';

const InnerMain = () => {
  const data = useRecoilValue<Data>(updatedData);

  return (
    <>
      {data.comments &&
        data.comments.map(
          (
            { id, content, createdAt, score, replies, user, newComment, voted },
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
              voted={voted}
            />
          )
        )}
    </>
  );
};

export default InnerMain;

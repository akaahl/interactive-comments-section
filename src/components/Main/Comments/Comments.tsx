import { useState } from 'react';
import { CommentsProps } from '../../../interfaces/interfaces';
import NewComment from '../NewComment/NewComment';
import CommentDetails from './CommentDetails';
import InnerComment from './InnerComment';
import VoteButton from './VoteButton';

const Comments = ({
  id: outerId,
  content,
  createdAt,
  score,
  replies,
  user,
  newComment,
  voted,
}: CommentsProps) => {
  const { username } = user;
  const [replyField, setReplyField] = useState<boolean>(false);
  return (
    <>
      <section className="comment-wrapper not-first:mt-6">
        <VoteButton
          score={score}
          username={username}
          outerId={outerId}
          voted={voted}
        />
        <CommentDetails
          content={content}
          createdAt={createdAt}
          replies={replies}
          user={user}
          replyField={replyField}
          setReplyField={setReplyField}
          newComment={newComment}
          outerId={outerId}
          outerComment={true}
        />
      </section>

      {replyField && (
        <NewComment
          reply={true}
          username={username}
          innerReply={true}
          outerId={outerId}
          setReplyField={setReplyField}
        />
      )}

      {replies?.length ? (
        <ul
          className="relative mt-5 flex flex-col pl-20 before:absolute before:left-10 
          before:h-full before:w-[2.5px] before:rounded-sm before:bg-neutral-light-gray before:content-['']"
        >
          {replies.map(
            (
              {
                content,
                createdAt,
                user,
                score,
                replyingTo,
                newComment,
                id,
                voted,
              },
              index
            ) => (
              <InnerComment
                content={content}
                createdAt={createdAt}
                user={user}
                id={id}
                outerId={outerId}
                key={index}
                score={score}
                replyingTo={replyingTo}
                newComment={newComment}
                voted={voted}
              />
            )
          )}
        </ul>
      ) : null}
    </>
  );
};

export default Comments;

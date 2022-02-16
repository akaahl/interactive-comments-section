import { useState } from 'react';
import CommentDetails from './CommentDetails';
import VoteButton from './VoteButton';
import NewComment from '../NewComment/NewComment';
import { InnerCommentProps } from '../../../interfaces/interfaces';

const InnerComment = ({
  score,
  content,
  createdAt,
  user,
  id,
  replyingTo,
  newComment,
  outerId,
  voted,
}: InnerCommentProps) => {
  const [replyField, setReplyField] = useState<boolean>(false);
  const { username } = user;
  return (
    <>
      <li className="comment-wrapper not-first:mt-2">
        <VoteButton
          score={score}
          username={username}
          id={id}
          voted={voted}
          mobile={false}
        />
        <CommentDetails
          content={content}
          createdAt={createdAt}
          user={user}
          id={id}
          score={score}
          replyingTo={replyingTo}
          replyField={replyField}
          setReplyField={setReplyField}
          outerComment={false}
          newComment={newComment}
        />
      </li>
      {replyField && (
        <NewComment
          reply={true}
          username={username}
          innerReply={true}
          outerId={outerId}
          setReplyField={setReplyField}
        />
      )}
    </>
  );
};

export default InnerComment;

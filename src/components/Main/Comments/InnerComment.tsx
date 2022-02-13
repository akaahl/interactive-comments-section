import React, { useState } from 'react';
import CommentDetails from './CommentDetails';
import VoteButton from './VoteButton';
import { CommentsProps } from './Comments';
import NewComment from '../NewComment/NewComment';

const InnerComment = ({
  score,
  content,
  createdAt,
  user,
  id,
  replyingTo,
  newComment,
}: CommentsProps) => {
  const [replyField, setReplyField] = useState<boolean>(false);
  const { username } = user;
  return (
    <>
      <li className="comment-wrapper not-first:mt-2">
        <VoteButton score={score} username={username} />
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
          id={id}
        />
      )}
    </>
  );
};

export default InnerComment;

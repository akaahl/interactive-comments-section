import React, { useState } from 'react';
import CommentDetails from './CommentDetails';
import VoteButton from './VoteButton';
import { Props } from './Comments';
import NewComment from '../NewComment/NewComment';

const InnerComment = ({
  score,
  content,
  createdAt,
  user,
  id,
  replyingTo,
}: Props) => {
  const [replyField, setReplyField] = useState<boolean>(false);
  const { username } = user;
  return (
    <>
      <li className="comment-wrapper not-first:mt-2">
        <VoteButton score={score} />
        <CommentDetails
          content={content}
          createdAt={createdAt}
          user={user}
          id={id}
          score={score}
          replyingTo={replyingTo}
          replyField={replyField}
          setReplyField={setReplyField}
        />
      </li>
      {replyField && <NewComment reply={true} username={username} />}
    </>
  );
};

export default InnerComment;

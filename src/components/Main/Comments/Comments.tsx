import React, { useState } from 'react';
import NewComment from '../NewComment/NewComment';
import CommentDetails from './CommentDetails';
import InnerComment from './InnerComment';
import VoteButton from './VoteButton';

export interface Props {
  id?: number | undefined;
  content: string;
  createdAt: string;
  score?: number;
  replies?: [];
  replyingTo?: string;
  user: {
    username: string;
    image: {
      png: string;
      webp: string;
    };
  };
}

const Comments = ({ id, content, createdAt, score, replies, user }: Props) => {
  const { username } = user;
  const [replyField, setReplyField] = useState<boolean>(false);
  return (
    <>
      <section className="comment-wrapper not-first:mt-6">
        <VoteButton score={score} username={username} />
        <CommentDetails
          content={content}
          createdAt={createdAt}
          replies={replies}
          user={user}
          replyField={replyField}
          setReplyField={setReplyField}
        />
      </section>

      {replyField && <NewComment reply={true} username={username} />}

      {replies?.length ? (
        <ul
          className="relative mt-5 flex flex-col pl-20 before:absolute before:left-10 
          before:h-full before:w-[2.5px] before:rounded-sm before:bg-neutral-light-gray before:content-['']"
        >
          {replies.map(
            ({ content, createdAt, user, id, score, replyingTo }, index) => (
              <InnerComment
                content={content}
                createdAt={createdAt}
                user={user}
                id={id}
                key={index}
                score={score}
                replyingTo={replyingTo}
              />
            )
          )}
        </ul>
      ) : null}
    </>
  );
};

export default Comments;

import React from 'react';
import CommentDetails from './CommentDetails';
import VoteButton from './VoteButton';

export interface Props {
  id?: number;
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
  return (
    <>
      <section className="comment-wrapper not-first:mt-6">
        <VoteButton score={score} />
        <CommentDetails
          content={content}
          createdAt={createdAt}
          replies={replies}
          user={user}
        />
      </section>

      {replies?.length ? (
        <ul
          className="relative mt-5 flex flex-col pl-20 before:absolute before:left-10 
          before:h-full before:w-[2.5px] before:rounded-sm before:bg-neutral-light-gray before:content-['']"
        >
          {replies.map(
            ({ content, createdAt, user, id, score, replyingTo }, index) => (
              <li className="comment-wrapper not-first:mt-2" key={index}>
                <VoteButton score={score} />
                <CommentDetails
                  content={content}
                  createdAt={createdAt}
                  user={user}
                  id={id}
                  score={score}
                  replyingTo={replyingTo}
                  key={index}
                />
              </li>
            )
          )}
        </ul>
      ) : null}
    </>
  );
};

export default Comments;

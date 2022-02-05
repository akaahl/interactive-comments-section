import React from "react";
import CommentDetails from "./CommentDetails";
import VoteButton from "./VoteButton";

interface Props {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replies: [];
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
    <section className="bg-white rounded-md w-full p-6 flex items-start not-first:mt-8">
      <VoteButton score={score} />
      <CommentDetails
        content={content}
        createdAt={createdAt}
        replies={replies}
        user={user}
      />
    </section>
  );
};

export default Comments;

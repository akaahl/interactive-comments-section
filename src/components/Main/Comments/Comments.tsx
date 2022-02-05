import React from "react";
import CommentDetails from "./CommentDetails";
import VoteButton from "./VoteButton";

const Comments = () => {
  return (
    <section className="bg-white rounded-md w-full p-6 flex">
      <VoteButton />
      <CommentDetails />
    </section>
  );
};

export default Comments;

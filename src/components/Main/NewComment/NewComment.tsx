import React from 'react';

interface Props {
  currentUser: {
    image?: {
      png: string;
      webp: string;
    };
    username?: string;
  };
}

const NewComment = ({ currentUser }: Props) => {
  const { image, username } = currentUser;

  return (
    <div className="comment-wrapper items-[initial] mt-8 justify-between">
      <div className="flex items-center justify-center self-center">
        <img
          src={`src/assets/${image?.webp.slice(1)}`}
          alt="current user"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>

      <textarea
        name="add-comment"
        id="add-comment"
        placeholder="Add a comment..."
        className="bg border-color-primary-light-grayish-blue mx-4 h-28 flex-1 resize-none rounded-lg 
        border-[1px] border-solid px-6 pt-2"
      ></textarea>

      <button
        className="rounded-lg bg-primary-moderate-blue py-3  px-4 font-medium text-white
        transition-all duration-200 ease-in-out hover:bg-primary-light-grayish-blue active:scale-95"
      >
        Send
      </button>
    </div>
  );
};

export default NewComment;

import React, { Suspense, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Data, dataAtom, dataState, updatedData } from '../../../App';
import { CommentsProps } from '../Comments/Comments';

interface NewCommentProps {
  reply?: boolean;
  username?: string;
}

const NewComment = ({ reply = false, username }: NewCommentProps) => {
  const data = useRecoilValue(updatedData);
  const setIndividualData = useSetRecoilState(dataAtom);
  const [textArea, setTextArea] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const innerRepliesLength = () => {
      let total = 0;
      data.comments.forEach((comment: any) => {
        total += comment.replies.length;
      });

      return total;
    };

    console.log(innerRepliesLength() + data.comments.length + 1);

    const newReply: CommentsProps = {
      id: data.comments.length + innerRepliesLength() + 1,
      content: textArea,
      createdAt: Date.now().toString(),
      replies: [],
      score: 0,
      user: {
        username: data.currentUser.username,
        image: data.currentUser.image,
      },
      newComment: true,
    };

    setIndividualData({
      ...data,
      comments: [...data.comments, newReply],
    });
    // console.log(individualData);
    setTextArea('');
  };

  return (
    <form
      className={`comment-wrapper items-[initial] ${
        reply ? 'mt-2' : 'mt-8'
      } justify-between`}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-center self-center">
        <img
          src={`src/assets/${data.currentUser.image.webp.slice(1)}`}
          alt="current user"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>

      <textarea
        name="add-comment"
        id="add-comment"
        placeholder={reply ? `@${username}` : 'Add a comment...'}
        className="bg border-color-primary-light-grayish-blue mx-4 h-28 flex-1 resize-none rounded-lg 
        border-[1px] border-solid px-6 pt-2"
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      ></textarea>

      <button
        className="rounded-lg bg-primary-moderate-blue py-3  px-4 font-medium text-white
        transition-all duration-200 ease-in-out hover:bg-primary-light-grayish-blue active:scale-95"
        type="submit"
      >
        {reply ? 'Reply' : 'Send'}
      </button>
    </form>
  );
};

export default NewComment;

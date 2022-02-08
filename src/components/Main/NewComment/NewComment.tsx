import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataAtom } from '../../../App';
import { Props } from '../Comments/Comments';

interface Props {
  reply?: boolean;
  username?: string;
}

const NewComment = ({ reply, username }: Props) => {
  const [data, setData] = useRecoilState(dataAtom);
  const [textArea, setTextArea] = useState<string>('');
  //   const { image, username } = data?.currentUser;
  // console.log(data.currentUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReply: Props = {
      id: data.comments.length + 1,
      content: textArea,
      createdAt: 'to be defined',
      replies: [],
      score: 0,
      user: {
        username,
        image: data.currentUser.image,
      },
    };

    console.log(newReply);
    setData({
      ...data,
      comments: data.comments.push(newReply),
    });
  };

  return (
    <form
      className={`comment-wrapper items-[initial] mt-${
        reply ? '2' : '8'
      } justify-between`}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-center self-center">
        <img
          src={`src/assets/${data?.currentUser?.image.webp.slice(1)}`}
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
          // console.log(textArea);
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

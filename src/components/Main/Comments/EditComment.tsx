import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dataAtom, updatedData } from '../../../App';

interface EditCommentProps {
  content: string;
  outerComment: boolean;
  outerId?: number | undefined;
  id?: number | undefined;
  setEditComment: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditComment = ({
  content,
  outerComment,
  outerId,
  id,
  setEditComment,
}: EditCommentProps) => {
  const data = useRecoilValue(updatedData);
  const setIndividualData = useSetRecoilState(dataAtom);
  const [textArea, setTextArea] = useState<string>(content);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('submit');
    // console.log('d')
    const comments = data.comments;

    if (outerComment) {
      const newComments = comments.map((comment: any) => {
        if (comment.id === outerId) {
          return { ...comment, content: textArea };
        } else {
          return comment;
        }
      });

      const newData = {
        ...data,
        comments: newComments,
      };
      setIndividualData(newData);
      //   console.log(newData);
    } else {
      const newComments = comments.map((comment: any) => {
        if (comment.replies.length) {
          const newReplies = comment.replies.map((reply: any) => {
            if (reply.id === id) {
              return { ...reply, content: textArea };
            } else {
              return reply;
            }
          });

          return { ...comment, replies: newReplies };
        } else {
          return comment;
        }
      });
      const newData = {
        ...data,
        comments: newComments,
      };

      console.log(newComments);
      setIndividualData(newData);
    }

    setEditComment(false);
  };

  return (
    <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
      <textarea
        name="edit-comment"
        id="edit-comment"
        className="bg border-color-primary-light-grayish-blue h-24  resize-none 
        rounded-lg border-[1px] border-solid px-6 pt-2"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>

      <button
        className="mt-4 self-end rounded-lg  bg-primary-moderate-blue py-3 px-4
        font-medium text-white transition-all duration-200 ease-in-out
        hover:bg-primary-light-grayish-blue active:scale-95"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default EditComment;

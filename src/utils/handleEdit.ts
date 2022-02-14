import { SetterOrUpdater } from 'recoil';
import { Data } from '../App';

export const handleSubmit = (
  e: React.FormEvent,
  data: any,
  outerComment: boolean,
  outerId: number | undefined,
  textArea: string,
  id: number | undefined,
  setIndividualData: SetterOrUpdater<Data>,
  setEditComment: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  const comments = data.comments;
  let newComments, newData;

  if (outerComment) {
    newComments = comments.map((comment: any) => {
      if (comment.id === outerId) {
        return { ...comment, content: textArea };
      }
      return comment;
    });

    newData = {
      ...data,
      comments: newComments,
    };
  } else {
    newComments = comments.map((comment: any) => {
      if (comment.replies.length) {
        const newReplies = comment.replies.map((reply: any) => {
          if (reply.id === id) {
            return { ...reply, content: textArea };
          }
          return reply;
        });
        return { ...comment, replies: newReplies };
      }
      return comment;
    });

    newData = {
      ...data,
      comments: newComments,
    };
  }

  setIndividualData(newData);
  setEditComment(false);
};

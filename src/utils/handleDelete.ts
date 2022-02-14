import { SetterOrUpdater } from 'recoil';
import { Data } from '../App';

export const handleDelete = (
  data: any,
  outerComment: boolean,
  outerId: number | undefined,
  setIndividualData: SetterOrUpdater<Data>,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  id: number | undefined
) => {
  const comments = data.comments;
  let newComments, newData;

  if (outerComment) {
    newComments = comments.filter((comment: any) => comment.id !== outerId);
    newData = {
      ...data,
      comments: newComments,
    };
  } else {
    newComments = comments.map((comment: any) => {
      if (comment.replies.length) {
        return {
          ...comment,
          replies: comment.replies.filter((reply: any) => reply.id !== id),
        };
      }
      return comment;
    });

    newData = {
      ...data,
      comments: newComments,
    };
  }
  setIndividualData(newData);
  setModal(false);
};

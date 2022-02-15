import { SetterOrUpdater } from 'recoil';
import { Data } from '../interfaces/interfaces';

export const handleVote = (
  action: string,
  data: any,
  setData: SetterOrUpdater<Data>,
  outerId: number | undefined,
  id: number | undefined
) => {
  const comments = data.comments;
  let newComments, newData;

  if (outerId) {
    newComments = comments.map((comment: any) => {
      if (comment.id === outerId) {
        let score = comment.score;
        return {
          ...comment,
          score: action === 'plus' ? (score += 1) : (score -= 1),
          voted: true,
        };
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
        const newInnerReplies = comment.replies.map((reply: any) => {
          if (reply.id === id) {
            let score = reply.score;
            return {
              ...reply,
              voted: true,
              score: action === 'plus' ? (score += 1) : (score -= 1),
            };
          }
          return reply;
        });
        return {
          ...comment,
          replies: newInnerReplies,
        };
      }
      return comment;
    });

    newData = {
      ...data,
      comments: newComments,
    };
  }

  setData(newData);
};

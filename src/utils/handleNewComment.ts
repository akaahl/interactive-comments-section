import { SetterOrUpdater } from 'recoil';
import { Data } from '../App';

export const handleNewCommentSubmit = (
  e: React.FormEvent,
  data: any,
  textArea: string,
  innerReply: boolean,
  username: string | undefined,
  outerId: number | undefined,
  setReplyField: React.Dispatch<React.SetStateAction<boolean>> | undefined,
  setIndividualData: SetterOrUpdater<Data>,
  setTextArea: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  const comments = data.comments;
  let newComments, newData;

  const innerRepliesLength = () => {
    return data.comments.reduce(
      (acc: number, comment: any) => (acc += comment.replies.length),
      0
    );
  };

  const newReply = {
    id: data.comments.length + innerRepliesLength() + 1,
    content: textArea,
    createdAt: Date.now().toString(),
    replies: !innerReply ? [] : undefined,
    replyingTo: innerReply ? username : '',
    score: 0,
    user: data.currentUser,
    newComment: true,
  };

  if (innerReply) {
    newComments = comments.map((comment: any) => {
      if (comment.id === outerId) {
        return { ...comment, replies: [...comment.replies, newReply] };
      } else {
        return comment;
      }
    });
    newData = { ...data, comments: newComments };
  } else {
    newComments = [...data.comments, newReply];
    newData = {
      ...data,
      comments: newComments,
    };
  }

  if (setReplyField) {
    setReplyField(false);
  }
  setIndividualData(newData);
  setTextArea('');
};

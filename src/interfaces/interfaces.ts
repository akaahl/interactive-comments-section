export interface Data {
  comments: CommentsProps[];
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export interface CommentsProps {
  id?: number | undefined;
  content: string;
  createdAt: string;
  score?: number;
  replies?: [];
  replyingTo?: string;
  voted?: boolean | undefined;
  user: {
    username: string | undefined;
    image: {
      png: string;
      webp: string;
    };
  };
  newComment?: boolean;
}

export interface CommentDetailsProps extends CommentsProps {
  outerId?: number | undefined;
  id?: number | undefined;
  replyField: boolean;
  setReplyField: React.Dispatch<React.SetStateAction<boolean>>;
  outerComment: boolean;
  score?: number | undefined;
  voted?: boolean | undefined;
}

export interface InnerCommentProps extends CommentsProps {
  outerId?: number | undefined;
  voted?: boolean | undefined;
}

export interface NewCommentProps {
  outerId?: number | undefined;
  innerReply: boolean;
  reply?: boolean;
  username?: string;
  setReplyField?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface VoteButtonProps {
  score: number | undefined;
  username: string | undefined;
  outerId?: number | undefined;
  id?: number | undefined;
  voted: boolean | undefined;
  mobile: boolean;
}

export interface DeleteProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EditButtonProps {
  editComment: boolean;
  setEditComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ReplyButtonProps {
  replyField: boolean;
  setReplyField: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
}

export interface EditCommentProps {
  content: string;
  outerComment: boolean;
  outerId?: number | undefined;
  id?: number | undefined;
  setEditComment: React.Dispatch<React.SetStateAction<boolean>>;
}

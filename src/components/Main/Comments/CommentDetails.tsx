import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import ReplyButton from './ReplyButton';
import TimeAgo from 'timeago-react';
import Modal from '../../Modal/Modal';
import { useState } from 'react';
import EditComment from './EditComment';
import { CommentDetailsProps } from '../../../interfaces/interfaces';
import VoteButton from './VoteButton';

const CommentDetails = ({
  content,
  createdAt,
  user,
  replyField,
  setReplyField,
  newComment,
  replyingTo,
  id,
  outerId,
  outerComment,
  score,
  voted,
}: CommentDetailsProps) => {
  const {
    username,
    image: { webp },
  } = user;

  const [modal, setModal] = useState<boolean>(false);
  const [editComment, setEditComment] = useState<boolean>(false);

  return (
    <div className="w-full md:ml-6 md:flex-1">
      <div className="flex items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full">
          <img src={webp} alt="user" className="object-cover" />
        </div>
        <p className="ml-3 font-medium">{username}</p>
        {username === 'juliusomo' ? (
          <>
            <p className="ml-3 rounded-sm bg-primary-moderate-blue py-[2px] px-[6px] text-sm font-semibold text-white">
              you
            </p>
            {newComment ? (
              <TimeAgo
                datetime={createdAt}
                className="ml-3 font-normal text-neutral-grayish-blue"
              />
            ) : (
              <p className="ml-3 font-normal text-neutral-grayish-blue">
                {createdAt}
              </p>
            )}
          </>
        ) : (
          <p className="ml-3 font-normal text-neutral-grayish-blue">
            {createdAt}
          </p>
        )}

        {modal && (
          <Modal
            setModal={setModal}
            modal={modal}
            id={id}
            outerComment={outerComment}
            outerId={outerId}
          />
        )}

        {username === 'juliusomo' && (
          <div className="ml-auto mr-0 hidden items-center md:flex">
            <DeleteButton setModal={setModal} modal={modal} />
            <EditButton
              editComment={editComment}
              setEditComment={setEditComment}
            />
          </div>
        )}

        {username !== 'juliusomo' && (
          <ReplyButton
            setReplyField={setReplyField}
            replyField={replyField}
            mobile={false}
          />
        )}
      </div>

      <div>
        {!editComment && (
          <p className="mt-4 font-normal tracking-wide text-neutral-grayish-blue">
            {replyingTo ? (
              <span className="mr-1 font-semibold text-primary-moderate-blue">
                @{replyingTo}
              </span>
            ) : null}
            {content}
          </p>
        )}

        {editComment && (
          <EditComment
            content={content}
            outerComment={outerComment}
            outerId={outerId}
            id={id}
            setEditComment={setEditComment}
          />
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <VoteButton
          score={score}
          username={username}
          outerId={outerId}
          voted={voted}
          mobile={true}
        />

        {username !== 'juliusomo' && (
          <ReplyButton
            setReplyField={setReplyField}
            replyField={replyField}
            mobile={true}
          />
        )}

        {username === 'juliusomo' && (
          <div className="ml-auto mr-0 flex items-center md:hidden">
            <DeleteButton setModal={setModal} modal={modal} />
            <EditButton
              editComment={editComment}
              setEditComment={setEditComment}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentDetails;

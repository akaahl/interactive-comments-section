import { Props } from './Comments';
import DeleteButton from './DeleteButton';
import EditButton from './Edit Button';
import ReplyButton from './ReplyButton';
import TimeAgo from 'timeago-react';

interface NewProps extends Props {
  replyField: boolean;
  setReplyField: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentDetails = ({
  content,
  createdAt,
  replies,
  user,
  replyField,
  setReplyField,
  newComment,
}: NewProps) => {
  const {
    username,
    image: { webp },
  } = user;

  const imagePath = (path: string) => {
    return `/src/assets/${path}`;
  };

  return (
    <div className="ml-6 flex-1 ">
      <div className="flex items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full">
          <img src={imagePath(webp)} alt="user" className="object-cover" />
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

        {username === 'juliusomo' && (
          <div className="ml-auto mr-0 flex items-center">
            <DeleteButton />
            <EditButton />
          </div>
        )}

        {username !== 'juliusomo' && (
          <ReplyButton setReplyField={setReplyField} replyField={replyField} />
        )}
      </div>

      <div>
        <p className="mt-4 font-normal tracking-wide text-neutral-grayish-blue">
          {replies?.length ? (
            <span className="mr-1 font-semibold text-primary-moderate-blue">
              @maxblagun
            </span>
          ) : null}
          {content}
        </p>
      </div>
    </div>
  );
};

export default CommentDetails;

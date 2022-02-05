// import { ReactComponent as ReplyIcon } from "../../../assets/images/icon-reply.svg";

interface Props {
  content: string;
  createdAt: string;
  replies: [];
  user: {
    username: string;
    image: {
      png: string;
      webp: string;
    };
  };
}

const CommentDetails = ({ content, createdAt, replies, user }: Props) => {
  const {
    username,
    image: { webp },
  } = user;

  return (
    <div className="flex-1 ml-6 ">
      <div className="flex items-center">
        <div className="bg-teal-500 h-7 w-7 rounded-full">
          <img src={webp} alt="user" />
        </div>
        <p className="font-medium ml-3">{username}</p>
        <p className="font-normal ml-3 text-neutral-grayish-blue">
          {createdAt}
        </p>

        <button className="ml-auto mr-0 flex items-center group">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
              className="group-hover:fill-primary-light-grayish-blue transition-all duration-200 ease-in-out"
            />
          </svg>
          <span className="ml-2 font-medium text-primary-moderate-blue group-hover:text-primary-light-grayish-blue transition-all duration-200 ease-in-out">
            Reply
          </span>
        </button>
      </div>

      <div>
        <p className="mt-4 text-neutral-grayish-blue font-normal tracking-wide">
          <span className="font-semibold text-primary-moderate-blue mr-1">
            @maxblagun
          </span>
          {content}
        </p>
      </div>
    </div>
  );
};

export default CommentDetails;

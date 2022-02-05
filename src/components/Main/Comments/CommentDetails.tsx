import replyIcon from "../../../assets/images/icon-reply.svg";

const CommentDetails = () => {
  return (
    <div className="flex-1 ml-8">
      <div className="flex items-center">
        <div className="bg-teal-500 h-7 w-7 rounded-full"></div>
        <p className="font-medium ml-3">amyrobson</p>
        <p className="font-normal ml-3 text-neutral-grayish-blue">
          24 days ago
        </p>

        <button className="ml-auto mr-0 flex items-center group">
          <img src={replyIcon} alt="reply" />
          <span className="ml-2 font-medium text-primary-moderate-blue">
            Reply
          </span>
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default CommentDetails;

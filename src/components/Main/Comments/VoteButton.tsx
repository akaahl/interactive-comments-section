import React from "react";
import plusIcon from "../../../assets/images/icon-plus.svg";
import minusIcon from "../../../assets/images/icon-minus.svg";

interface Props {
  score: number | undefined;
}

const VoteButton = ({ score }: Props) => {
  return (
    <div className="flex flex-col items-center rounded-md bg-neutral-very-light-gray p-4">
      <button>
        <img src={plusIcon} alt="plus" />
      </button>
      <span className="my-4 font-semibold text-primary-moderate-blue">
        {score}
      </span>
      <button>
        <img src={minusIcon} alt="minus" />
      </button>
    </div>
  );
};

export default VoteButton;

import React from "react";
import plusIcon from "../../../assets/images/icon-plus.svg";
import minusIcon from "../../../assets/images/icon-minus.svg";

interface Props {
  score: number;
}

const VoteButton = ({ score }: Props) => {
  return (
    <button className="flex flex-col p-4 rounded-md bg-neutral-very-light-gray">
      <img src={plusIcon} alt="plus" />
      <span className="my-4 font-semibold text-primary-moderate-blue">
        {score}
      </span>
      <img src={minusIcon} alt="minus" />
    </button>
  );
};

export default VoteButton;

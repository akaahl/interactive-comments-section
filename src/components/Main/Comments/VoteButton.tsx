import React from 'react';
import plusIcon from '../../../assets/images/icon-plus.svg';
import minusIcon from '../../../assets/images/icon-minus.svg';

interface Props {
  score: number | undefined;
  username: string;
}

const VoteButton = ({ score, username }: Props) => {
  return (
    <div
      className={`flex flex-col items-center rounded-md ${
        username === 'juliusomo'
          ? 'bg-neutral-very-light-gray/50'
          : 'bg-neutral-very-light-gray'
      } p-4`}
    >
      <button
        disabled={username === 'juliusomo' ? true : false}
        onClick={() => console.log('plus')}
      >
        <img src={plusIcon} alt="plus" />
      </button>
      <span
        className={`my-4 font-semibold ${
          username === 'juliusomo'
            ? 'text-primary-light-grayish-blue'
            : 'text-primary-moderate-blue'
        }`}
      >
        {score}
      </span>
      <button
        disabled={username === 'juliusomo' ? true : false}
        onClick={() => console.log('minus')}
      >
        <img src={minusIcon} alt="minus" />
      </button>
    </div>
  );
};

export default VoteButton;

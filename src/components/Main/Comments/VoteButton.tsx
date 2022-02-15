import plusIcon from '../../../assets/images/icon-plus.svg';
import minusIcon from '../../../assets/images/icon-minus.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dataAtom, updatedData } from '../../../App';
import { handleVote } from '../../../utils/handleVote';
import { VoteButtonProps } from '../../../interfaces/interfaces';

const VoteButton = ({
  score,
  username,
  outerId,
  voted,
  id,
}: VoteButtonProps) => {
  const data = useRecoilValue(updatedData);
  const setData = useSetRecoilState(dataAtom);

  return (
    <div
      className={`flex flex-col items-center rounded-md ${
        username === 'juliusomo'
          ? 'bg-neutral-very-light-gray/50'
          : 'bg-neutral-very-light-gray'
      } p-4`}
    >
      <button
        disabled={username === 'juliusomo' || voted ? true : false}
        onClick={() => handleVote('plus', data, setData, outerId, id)}
      >
        <img src={plusIcon} alt="plus" />
      </button>
      <span
        className={`my-4 font-semibold ${
          username === 'juliusomo' || voted
            ? 'text-primary-light-grayish-blue'
            : 'text-primary-moderate-blue'
        }`}
      >
        {score}
      </span>
      <button
        disabled={username === 'juliusomo' ? true : false}
        onClick={() => {
          handleVote('minus', data, setData, outerId, id);
        }}
      >
        <img src={minusIcon} alt="minus" />
      </button>
    </div>
  );
};

export default VoteButton;

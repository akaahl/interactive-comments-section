import plusIcon from '../../../assets/images/icon-plus.svg';
import minusIcon from '../../../assets/images/icon-minus.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { handleVote } from '../../../utils/handleVote';
import { VoteButtonProps } from '../../../interfaces/interfaces';
import { dataAtom, updatedData } from '../../../stores/stores';

const VoteButton = ({
  score,
  username,
  outerId,
  voted,
  id,
  mobile,
}: VoteButtonProps) => {
  const data = useRecoilValue(updatedData);
  const setData = useSetRecoilState(dataAtom);

  return (
    <div
      className={` items-center rounded-md  ${
        username === 'juliusomo'
          ? 'bg-neutral-very-light-gray/50'
          : 'bg-neutral-very-light-gray'
      }  ${
        mobile
          ? 'flex flex-row-reverse p-3 md:hidden'
          : 'hidden flex-col p-4 md:flex'
      }`}
    >
      <button
        disabled={username === 'juliusomo' || voted ? true : false}
        onClick={() => handleVote('plus', data, setData, outerId, id)}
      >
        <img src={plusIcon} alt="plus" />
      </button>
      <span
        className={`${mobile ? 'mx-4' : 'my-4'}  font-semibold ${
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

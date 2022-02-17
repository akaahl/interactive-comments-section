import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { EditCommentProps } from '../../../interfaces/interfaces';
import { dataAtom, updatedData } from '../../../stores/stores';
import { handleEdit } from '../../../utils/handleEdit';

const EditComment = ({
  content,
  outerComment,
  outerId,
  id,
  setEditComment,
}: EditCommentProps) => {
  const data = useRecoilValue(updatedData);
  const setIndividualData = useSetRecoilState(dataAtom);
  const [textArea, setTextArea] = useState<string>(content);

  return (
    <form
      className="mt-10 flex flex-col"
      onSubmit={(e) => {
        handleEdit(
          e,
          data,
          outerComment,
          outerId,
          textArea,
          id,
          setIndividualData,
          setEditComment
        );
      }}
    >
      <textarea
        name="edit-comment"
        id="edit-comment"
        className="bg border-color-primary-light-grayish-blue h-24  resize-none 
        rounded-lg border-[1px] border-solid px-6 pt-2"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>

      <button
        className="mt-4 self-end rounded-lg  bg-primary-moderate-blue py-3 px-4
        font-medium text-white transition-all duration-200 ease-in-out
        hover:bg-primary-light-grayish-blue active:scale-95"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default EditComment;

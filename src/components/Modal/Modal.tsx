import { createPortal } from 'react-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dataAtom, updatedData } from '../../App';

interface ModalProps {
  id: number | undefined;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  outerComment: boolean;
}

const Modal = ({ modal, setModal, id, outerComment }: ModalProps) => {
  const data = useRecoilValue(updatedData);
  const setIndividualData = useSetRecoilState(dataAtom);

  const handleDelete = () => {
    if (outerComment) {
      const newOuterComment = data.comments.filter(
        (comment: any) => comment.id !== id
      );
      const newData = {
        ...data,
        comments: newOuterComment,
      };
      setIndividualData(newData);
    }

    const filteredInnerReplies = data.comments.map((comment: any) => {
      if (comment.replies.length) {
        return {
          ...comment,
          replies: comment.replies.filter((reply: any) => reply.id !== id),
        };
      }
      return comment;
    });

    const newData = {
      ...data,
      comments: filteredInnerReplies,
    };

    setIndividualData(newData);

    // setIndividualData(filteredInnerReplies);
  };

  return createPortal(
    <div
      className="fixed top-0 bottom-0 right-0 left-0 flex items-center
                justify-center bg-black bg-opacity-40"
      onClick={(e) => {
        setModal(!modal);
      }}
    >
      <aside
        className="w-[400px] rounded-lg bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-medium text-black">Delete Reply</h3>

        <p className="my-4  font-semibold text-neutral-grayish-blue">
          Are you sure you want to delete this reply? This will remove the reply
          and cannot be undone.
        </p>

        <div className="mt-6 flex justify-between">
          <button
            className="flex-[0.48] rounded-md bg-neutral-grayish-blue py-3
            text-sm font-bold uppercase text-white transition-all duration-200 
            hover:bg-primary-light-grayish-blue"
            onClick={() => setModal(false)}
          >
            No, Cancel
          </button>
          <button
            className="flex-[0.48] rounded-md bg-primary-soft-red py-3
            text-sm font-bold uppercase text-white transition-all duration-200 
            hover:bg-primary-pale-red"
            onClick={handleDelete}
          >
            Yes, Delete
          </button>
        </div>
      </aside>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;

import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../store/modal/modalSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state) => state.toggleModalReducer.isModalOpen
  );

  let hidden = isModalOpen ? "" : "hidden";
  return (
    <div
      onClick={() => dispatch(toggleModal())}
      className={`${hidden} fixed inset-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full`}
      id='user-modal'
      aria-hidden='true'></div>
  );
};

export default Overlay;

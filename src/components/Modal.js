import { useSelector } from "react-redux";
const Modal = () => {
  const isModalOpen = useSelector(
    (state) => state.toggleModalReducer.isModalOpen
  );
  const person = useSelector(
    (state) => state.toggleModalReducer.user
  );
  let hidden = isModalOpen ? "" : "hidden";

  return (
    <div
      aria-hidden='true'
      className={`${hidden} border shadow-lg rounded-md bg-gradient-to-b from-green-100 to-indigo-300 md:max-w-md md:mx-auto m-2 p-2 fixed inset-x-0 z-50 top-1/2 transform -translate-y-1/2`}>
      <div className='flex flex-col justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
        <h2 className='text-lg'>抽獎結果</h2>
        <img
          className='object-cover w-auto rounded-full mx-auto animate-bounce'
          src={person.image || "https://fakeimg.pl/200x200/d1d1d1/"}
          alt='user'
          aria-describedby='user'
        />
        <h3 className='text-center bg-teal-500 text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white rounded p-1'>
          {person.fullName}
        </h3>
      </div>
    </div>
  );
};

export default Modal;

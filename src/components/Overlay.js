const Overlay = () => {
  let isModalOpen = false
  let hidden = isModalOpen ? '' : 'hidden'
  return (
    <div
      className={`${hidden} fixed inset-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full`}
      id='user-modal'
      aria-hidden='true'></div>
  );
}

export default Overlay;

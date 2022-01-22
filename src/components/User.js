const User = (props) => {
  return (
    <div className='flex justify-between items-center m-3 p-3 rounded  hover:bg-teal-200 '>
      <img src={props.src} alt='user-thumbnail' />
      <p>{props.name}</p>
    </div>
  );
};

export default User;

import User from "./User";
import dummyData from "../dummyData.json";
const Draw = () => {
  const data = dummyData.results;

  return (
    <section className='flex flex-col md:w-1/2 lg:w-4/5 m-3 p-10 items-center gap-5 bg-indigo-100 opacity-80 rounded font-semibold'>
      <h2 className='text-lg'>參與抽獎名單</h2>
      <div className='w-full h-screen overflow-y-scroll'>
        {data.map((el) => {
          return (
            <User
              src={el.picture.thumbnail}
              name={`${el.name.first}  ${el.name.last}`}
              key={el.login.uuid}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Draw;

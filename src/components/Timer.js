import { useState } from "react";
import { Toast } from "./../utils";
const Timer = () => {
  const [time, setTime] = useState(1);
  let minute = time > 9 ? <span>{time}</span> : <span>0{time}</span>;
  if (time > 120 || time < 1) {
    Toast.fire({
      icon: "warning",
      title: "時間範圍為1~120分鐘",
    });
  }

  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };
  return (
    <section className='flex flex-col m-3 p-10 items-center gap-5 md:w-2/3 lg:w-4/5  bg-indigo-100 opacity-80 rounded font-semibold'>
      <h2 className='text-lg'>抽獎時間</h2>
      <div className='flex items-center gap-5'>
        <input
          onChange={timeChangeHandler}
          value={time}
          className='mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          type='number'
          min='1'
          max='120'
        />
        <span>分鐘</span>
        <button
          type='submit'
          className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>
          設定
        </button>
      </div>
      <div className='mt-1 text-8xl flex'>
        <span className='text-sky-500'>{minute}</span>
        <span className='text-sky-600'>:</span>
        <span className='text-sky-500'>00</span>
      </div>
    </section>
  );
};

export default Timer;

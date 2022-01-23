import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast, formatTime} from "./../utils";

const Timer = () => {
  // 倒數計時狀態 倒數設定時間
  const { isCountdown, time } = useSelector((state) => state.startTimerReducer);
  console.log(isCountdown, time);
  // 設定倒數時間
  const [minute, setMinute] = useState(time);
  // 倒數狀態
  const [startTimer, setStartTimer] = useState(false);
  const [countdownTime, setCountdownTime] = useState(minute * 60);

  // 可輸入數值範圍
  if (minute > 120 || minute < 1 || !minute) {
    Toast.fire({
      icon: "warning",
      title: "時間範圍為1~120分鐘",
    });
  }

  // 沒有倒數時 分鐘連動畫面
  const timeChangeHandler = (e) => {
    setMinute(e.target.value);
  };
  
  const { min, sec } = formatTime(countdownTime);
  useEffect(() => {
    if (countdownTime > 0) {
      setTimeout(() => {
        console.log("startTime, ", countdownTime);
        setCountdownTime((prev) => prev - 1);
      }, 1000);
    }

    if (countdownTime === 0 && startTimer) {
      console.log("done");
      setStartTimer(false);
    }
  }, [countdownTime, startTimer]);

  return (
    <section className='flex flex-col m-3 p-10 items-center gap-5 md:w-2/3 lg:w-4/5  bg-indigo-100 opacity-90 rounded font-semibold'>
      <h2 className='text-lg'>抽獎時間</h2>
      <div className='flex items-center gap-5'>
        <input
          placeholder='1'
          disabled={isCountdown}
          onChange={!isCountdown ? timeChangeHandler : null}
          className='mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          type='number'
          min='1'
          max='120'
        />
        <span>分鐘</span>
        <button
          disabled={isCountdown}
          type='button'
          className='bg-teal-500 hover:bg-teal-700 disabled:bg-slate-500 text-white font-bold py-2 px-4 rounded'>
          倒數開始
        </button>
      </div>
      <div className='mt-1 text-8xl flex'>
        {!isCountdown ? (
          <span className='text-sky-500'>{minute}</span>
        ) : (
          <span className='text-sky-500'>{min}</span>
        )}
        <span className='text-sky-600'>:</span>
        <span className='text-sky-500'>{sec}</span>
      </div>
    </section>
  );
};;

export default Timer;

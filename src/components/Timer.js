import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast } from "./../utils";
import { toggleTimer } from "./../store/timer/timerSlice";
import Clock from "./Clock";

const Timer = () => {
  const dispatch = useDispatch();
  // 指定範圍，調整直接修改這邊即可
  const minValue = 1;
  const maxValue = 120;

  // 預設倒數狀態不開啟 時間預設1分鐘
  const { isCountdown, time } = useSelector(
    (state) => state.toggleTimerReducer
  );
  // 管理倒數狀態
  const [minute, setMinute] = useState(time);
  const [startTimer, setStartTimer] = useState(isCountdown);

  // 倒數分鐘

  // 限制輸入內容為數字 不能為字母
  const onlyNumber = (e) => {
    if (Number.isNaN(e.target.value)) {
      Toast.fire({
        icon: "warning",
        title: "請輸入純數字",
      });
      return;
    }
    // 刪除數字以外的字母，輸入非數字外的字直接""移除掉
    e.target.value = e.target.value.replace(/[^\d]/g, "");
  };

  // 範圍限制
  const outOfRange =
    minute < minValue || minute > maxValue || !minute ? true : false;

  if (outOfRange) {
    Toast.fire({
      icon: "warning",
      title: `時間範圍為${minValue}~${maxValue}分鐘`,
    });
  }
  const StopCountDownHandler = () => {
    dispatch(toggleTimer());
    setStartTimer(false);
    setMinute(time);
  };

  return (
    <section className='flex flex-col m-3 p-10 items-center gap-5 md:w-2/3 lg:w-4/5  bg-indigo-100 opacity-90 rounded font-semibold'>
      <h2 className='text-lg'>抽獎時間</h2>
      <div className='flex items-center gap-5'>
        <input
          value = {minute}
          disabled={isCountdown}
          onKeyUp={onlyNumber}
          onChange={(e) => setMinute(e.target.value)}
          className='mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          type='number'
          min={minValue}
          max={maxValue}
          placeholder={time}
          required
        />
        <span>分鐘</span>
        <button
          onClick={() => {
            dispatch(toggleTimer());
            setStartTimer(true);
          }}
          disabled={isCountdown || outOfRange}
          type='button'
          className='bg-teal-500 hover:bg-teal-700 disabled:bg-slate-500 text-white font-bold py-2 px-4 rounded'>
          {isCountdown ? "倒數中" : "開始"}
        </button>
      </div>
      {isCountdown && (
        <Clock
          countdownSeconds={minute * 60}
          stopCountDown={StopCountDownHandler}
        />
      )}
      {console.log("timer")}
    </section>
  );
};

export default Timer;

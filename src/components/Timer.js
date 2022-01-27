import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast, formatTime } from "./../utils";
import { toggleModal } from "./../store/modal/modalSlice";
import { toggleTimer } from "./../store/timer/timerSlice";

const Timer = () => {
  const dispatch = useDispatch();
  // 預設倒數狀態跟時間
  const { isCountdown, time } = useSelector(
    (state) => state.toggleTimerReducer
  );
  // 表單更改倒數時間
  const [minute, setMinute] = useState(time);
  // 更新倒數狀態與時間
  const [startTimer, setStartTimer] = useState(isCountdown);
  const [countdownTime, setCountdownTime] = useState(minute * 60);
  const { min, sec } = formatTime(countdownTime);

  // 設定時間
  const setTime = (minute) => {
    setMinute(minute);
    setCountdownTime(minute * 60);
  };

  // 沒有倒數時 表單連動畫面
  const timeChangeHandler = (e) => {
    const newMinute = Number(e.target.value);
    if (Number.isNaN(newMinute)) return;
    setTime(newMinute);
  };

  // 限制數字
  const onlyNumber = (e) => {
    if (Number.isNaN(e.target.value)) {
      Toast.fire({
        icon: "warning",
        title: "請輸入純數字",
      });
      return;
    }
    e.target.value = e.target.value.replace(/[^\d]/g, "");
  };

  // 倒數更新秒數
  useEffect(() => {
    // 可輸入數值範圍
    if (minute > 120 || minute < 1 || !minute) {
      Toast.fire({
        icon: "warning",
        title: "時間範圍為1~120分鐘",
      });
      return;
    }
    if (countdownTime > 0 && startTimer) {
      setTimeout(() => {
        setCountdownTime((prev) => prev - 1);
      }, 1000);
    }

    if (countdownTime === 0 && startTimer) {
      setStartTimer(false);
      dispatch(toggleTimer());
      dispatch(toggleModal());
      setTime(1);
    }
  }, [countdownTime, startTimer]);

  return (
    <section className='flex flex-col m-3 p-10 items-center gap-5 md:w-2/3 lg:w-4/5  bg-indigo-100 opacity-90 rounded font-semibold'>
      <h2 className='text-lg'>抽獎時間</h2>
      <div className='flex items-center gap-5'>
        <input
          value={minute}
          disabled={isCountdown}
          onKeyUp={onlyNumber}
          onChange={!isCountdown ? timeChangeHandler : null}
          className='mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          type='text'
          size='3'
          maxLength='3'
          required
        />
        <span>分鐘</span>
        <button
          onClick={() => {
            dispatch(toggleTimer());
            setStartTimer(true);
          }}
          disabled={isCountdown || minute > 120 || minute < 1 || !minute}
          type='button'
          className='bg-teal-500 hover:bg-teal-700 disabled:bg-slate-500 text-white font-bold py-2 px-4 rounded'>
          {isCountdown ? "倒數中" : "開始"}
        </button>
      </div>
      <div className='mt-1 h-20 text-8xl outline-1 relative'>
        {!isCountdown ? (
          <span className='text-sky-500 absolute -right-2'>{minute}</span>
        ) : (
          <span className='text-sky-500 absolute right-0'>{min}</span>
        )}
        <span className='text-sky-600 absolute left-2 -top-2'>:</span>
        <span className='text-sky-500 absolute left-8'>{sec}</span>
      </div>
    </section>
  );
};

export default Timer;

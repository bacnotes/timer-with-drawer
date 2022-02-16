import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { formatTime, getRandom, draw } from "./../utils";
import { toggleModal } from "./../store/modal/modalSlice";
import dummyData from "../dummyData.json";
const data = dummyData.results;
const Clock = (props) => {
  const dispatch = useDispatch();

  // 更新倒數時間
  const [countdownTime, setCountdownTime] = useState(props.countdownSeconds);
  const { min, sec } = formatTime(countdownTime);

  // 倒數更新秒數
  useEffect(() => {
    if (countdownTime > 0) {
      setTimeout(() => {
        setCountdownTime((prev) => prev - 1);
      }, 1000);
    }

    if (countdownTime === 0) {
      const drawData = draw(data, getRandom);
      dispatch(toggleModal(drawData));
      props.stopCountDown();
    }
  }, [countdownTime, dispatch, props]);

  return (
    <div className='mt-1 h-20 text-8xl outline-1 relative'>
      <span className='text-sky-500 absolute right-0'>{min}</span>
      <span className='text-sky-600 absolute left-2 -top-2'>:</span>
      <span className='text-sky-500 absolute left-8'>{sec}</span>
      {console.log("clock")}
    </div>
  );
};

export default Clock;

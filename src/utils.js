import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
});

export const getRandom = (num) => {
  return Math.floor(Math.random() * num) + 1;
};

export const draw = (arrayList, fn) => {
  const index = fn(arrayList.length);
  const { name, picture } = arrayList[index];
  const image = picture.large;
  const fullName = `${name.first} ${name.last}`;
  return { fullName, image };
};

export const formatTime = (time) => {
  let min = parseInt(time / 60);
  if (min < 10) min = `0${min}`;
  let sec = time % 60;
  if (sec < 10) sec = `0${sec}`;
  return { min, sec };
};
  
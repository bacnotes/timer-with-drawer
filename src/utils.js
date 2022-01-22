import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
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
  
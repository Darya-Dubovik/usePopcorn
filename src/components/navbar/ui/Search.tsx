import { useGetMovies } from "../model/useGetMovies";

export function Search() {
  const debouncedFunction = useGetMovies();

  // event: React.ChangeEvent - тип события (клик и т.д)
  // <HTMLInputElement> - где (на каком элементе) произошло событие

  return (
    <input
      className="search"
      onChange={debouncedFunction}
      type="text"
      placeholder="Search movies..."
    />
  );
}

// контролир. инпут; ф-ции debounce

// Debounce JS
// const input = document.querySelector("input");

// function debounce(func, delay) {
//   let timerId;

//   return function (e) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func(e.target.value);
//     }, delay);
//   };
// }

// const debouncedFunction = debounce(inputHandler, 2000);

// function inputHandler(value) {
//   console.log(value);
//   //FETCH
// }

// input.addEventListener("input", debouncedFunction);

// Debounce React
// export function DebounceComp() {

//   function debounce(func: (value: string) => void, delay: number) {
//     let timerId: number;

//     return function (e: React.ChangeEvent<HTMLInputElement>) {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         func(e.target.value);
//       }, delay);
//     };
//   }

//   const debouncedFunction = debounce(inputHandler, 2000);

//   function inputHandler(value: string) {
//     console.log(value);
//     //FETCH
//   }

//   return <input type="text" onChange={debouncedFunction} />;
// }

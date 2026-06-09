export function debounce(func: (value: string) => void, delay: number) {
  let timerId: number;

  return function (e: React.ChangeEvent<HTMLInputElement>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(e.target.value);
    }, delay);
  };
}

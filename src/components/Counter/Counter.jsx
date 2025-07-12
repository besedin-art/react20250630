export const Counter = ({ value = 0, max = Infinity, min = 0, onChange }) => {
  const increment = () => { onChange(Math.min(value + 1, max)) };
  const decrement = () => { onChange(Math.max(value - 1, min)) };

  return (
    <div>
      <button onClick={decrement} type="button">-</button>
      {value}
      <button onClick={increment} type="button">+</button>
    </div>
  );
}
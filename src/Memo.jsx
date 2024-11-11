import { useMemo, useState } from "react";

// Initialize a large array of items with one selected item
const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

function Memo() {
  const [count, setCount] = useState(0);

  // Store the initial items in state
  const [items] = useState(initialItems);

  // Memoize the selected item to avoid unnecessary recalculations
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div>
      <h2>With 'useMemo'</h2>
      <p>quickly click the button below </p>
      <h3>Count: {count}</h3>
      <h3>Selected Item: {selectedItem?.id}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Memo;

import { useMemo, useState } from "react";

// Initialize a large array of items with one selected item
const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

function WithoutMemo() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // State to keep track of the items
  const [items] = useState(initialItems);

  // Find the selected item from the items array
  const selectedItem = items.find((item) => item.isSelected);

  return (
    <div>
      <h2>Without 'useMemo'</h2>
      <p>quickly click the button below </p>
      <h3>Count: {count}</h3>
      <h3>Selected Item: {selectedItem?.id}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default WithoutMemo;

import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

function WithoutMemo() {
  const [count, setCount] = useState(0);

  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected)

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

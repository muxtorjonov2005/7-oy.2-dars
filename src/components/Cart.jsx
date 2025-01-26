import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../store/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleAddItem(item) {
    dispatch(addItem(item));
  };

  function handleRemoveItem(id) {
    dispatch(removeItem({ id }));
  };

  function handleIncrementQuantity(id) {
    dispatch(incrementQuantity({ id }));
  };

  function handleDecrementQuantity(id) {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <div className="cart w-[600px] text-center mx-auto flex flex-col gap-5">
      <h1 className="text-3xl mb-3">Savatcha</h1>
      <form className="flex gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Enter product name"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const name = e.target.previousElementSibling.value;
            if (name.trim()) {
              handleAddItem({ id: Date.now(), name, quantity: 1 });
              e.target.previousElementSibling.value = "";
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          Add
        </button>
      </form>

      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-2 px-4 bg-white rounded shadow mb-2"
            >
              <span>
                {item.name} ({item.quantity})
              </span>
              <div className="flex gap-5">
                <button
                  onClick={() => handleIncrementQuantity(item.id)}
                  className="text-xl px-4 py-2 bg-blue-500 text-white cursor-pointer rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleDecrementQuantity(item.id)}
                  className="text-xl px-4 py-2 bg-gray-500 text-white cursor-pointer rounded"
                >
                  -
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-xl px-4 py-2 bg-red-500 text-white cursor-pointer rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Cart;

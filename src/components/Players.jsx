import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer, removePlayer, updateScore } from "../store/playersSlice";

function Players() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);

  function handleAddPlayer() {
    if (name.trim()) {
      dispatch(addPlayer({ name, score: parseInt(score) }));
      setName("");
      setScore(0);
    }
  }

  return (
    <div className="p-4">
      <div className="flex gap-5">
        <div className="flex gap-5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Player Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Score"
            className="w-[100px] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleAddPlayer}
          className="px-4 py-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-700 cursor-pointer"
        >
          Add Player
        </button>
      </div>
      <ul className="mt-4 mx-auto">
        {players.length > 0 && players.map((player, index) => (
          <li
            key={player.id}
            className="flex justify-between items-center gap-4 mb-2 shadow py-2 px-4"
          >
            <span>
              {player.name} - {player.score}
            </span>
            <input
              type="number"
              value={player.score}
              onChange={(e) =>
                dispatch(
                  updateScore({
                    id: player.id,
                    score: parseInt(e.target.value),
                  })
                )
              }
              className="w-[100px] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => dispatch(removePlayer(player.id))}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Players;

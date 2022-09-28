import React, { useEffect } from "react";
import "./App.css";
import { updateBoard } from "./store";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { createBoard } from "./utils/createBoard";

function App() {
  const dispatch = useAppDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    // dispatch(updateBoard(createBoard(boardSize)));
    console.log(createBoard(boardSize));
  }, []);

  return <div className="flex items-center justify-center h-screen"></div>;
}

export default App;

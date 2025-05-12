import React, { useState, StrictMode } from 'react';
import { GameLayout } from './GameLayout.jsx';
import PropTypes from 'prop-types';
import './App.module.css';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(null));

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkWinner = (board) => {
		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
	};

	const checkDraw = (board) => {
		return board.every((cell) => cell !== null);
	};

	const handleCellClick = (index) => {
		if (isGameEnded || field[index]) {
			return;
		}

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const winner = checkWinner(newField);
		if (winner) {
			setIsGameEnded(true);
		} else if (checkDraw(newField)) {
			setIsDraw(true);
			setIsGameEnded(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(null));
	};

	return (
		<StrictMode>
			<GameLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				field={field}
				onCellClick={handleCellClick}
				onRestart={handleRestart}
			/>
		</StrictMode>
	);
};

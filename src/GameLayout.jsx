import React from 'react';
import { Information } from './Information.jsx';
import { Field } from './Field.jsx';
import styles from './App.module.css';

export const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	onCellClick,
	onRestart,
}) => {
	return (
		<div className={styles.gameContainer}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} onCellClick={onCellClick} />
			<button className={styles.restartButton} onClick={onRestart}>
				Начать заново
			</button>
		</div>
	);
};

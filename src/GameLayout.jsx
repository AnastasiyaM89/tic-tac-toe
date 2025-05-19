import React from 'react';
import { Information } from './Information.jsx';
import { Field } from './Field.jsx';
import styles from './App.module.css';

export const GameLayout = ({ field, onCellClick, onRestart, status }) => {
	return (
		<div className={styles.gameContainer}>
			<Information status={status} />
			<Field field={field} onCellClick={onCellClick} />
			<button className={styles.restartButton} onClick={onRestart}>
				Начать заново
			</button>
		</div>
	);
};

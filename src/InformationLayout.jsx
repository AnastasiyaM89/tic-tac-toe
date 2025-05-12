import React from 'react';
import styles from './Information.module.css';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <div className={styles.information}>{status}</div>;
};

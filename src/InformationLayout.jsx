import React from 'react';
import styles from './Information.module.css';

export const InformationLayout = ({ status }) => {
	return <div className={styles.information}>{status}</div>;
};

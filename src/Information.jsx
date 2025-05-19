import React from 'react';
import { InformationLayout } from './InformationLayout.jsx';
import PropTypes from 'prop-types';

export const Information = ({ status }) => {
	return <InformationLayout status={status} />;
};

Information.propTypes = {
	status: PropTypes.string.isRequired,
};

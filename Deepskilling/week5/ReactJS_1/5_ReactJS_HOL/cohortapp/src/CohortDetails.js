import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ title, startDate, status, coach, trainer }) => {
    const titleStyle = {
        color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={titleStyle}>{title}</h3>
            <dl>
                <dt>Started On</dt>
                <dd>{startDate}</dd>
                
                <dt>Current Status</dt>
                <dd>{status}</dd>
                
                <dt>Coach</dt>
                <dd>{coach}</dd>
                
                <dt>Trainer</dt>
                <dd>{trainer}</dd>
            </dl>
        </div>
    );
};

export default CohortDetails;

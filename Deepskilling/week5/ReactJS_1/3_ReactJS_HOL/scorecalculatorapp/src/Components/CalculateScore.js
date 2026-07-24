import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name, School, Total, Goal }) => {
    // Calculating the average score based on Total marks and Goal (e.g. number of subjects)
    const average = (Total / Goal).toFixed(2);
    
    return (
        <div className="score-card">
            <h2>Student Details</h2>
            <div className="student-info">
                <p><strong>Name:</strong> {Name}</p>
                <p><strong>School:</strong> {School}</p>
                <p><strong>Total Marks:</strong> {Total}</p>
                <p><strong>Goal (Subjects):</strong> {Goal}</p>
                <p className="average"><strong>Average Score:</strong> {average}</p>
            </div>
        </div>
    );
};

export default CalculateScore;

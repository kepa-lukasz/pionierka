import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

const getStatus = (value, reverse) => {
    const direct = [
        {
            label: 'ahead of pace',
            schedule: 'ahead of schedule',
            percent: 33,
            variant: 'success',
            icon: <FaSmile className="text-success" size={16} />,
        },
        {
            label: 'on pace',
            schedule: 'on schedule',
            percent: 67,
            variant: 'warning',
            icon: <FaMeh className="text-warning" size={16} />,
        },
        {
            label: 'behind pace',
            schedule: 'behind schedule',
            percent: 100,
            variant: 'danger',
            icon: <FaFrown className="text-danger" size={16} />,
        },
    ];

    const reversed = [...direct].reverse();
    return reverse ? reversed[value - 1] : direct[value - 1];
};

const GoalSlider = ({ initialValue = 2, reverse = false, onChange }) => {
    const [value, setValue] = useState(initialValue);
    const status = getStatus(value, reverse);

    const handleChange = (e) => {
        const newVal = parseInt(e.target.value);
        setValue(newVal);
        if (onChange) onChange(newVal);
    };

    return (
        <div  style={{ position: "relative" , maxWidth: '500px' }}>

            {/* Progress bar */}
            <div className="position-relative mb-3" style={{ height: '20px' }}>
                <ProgressBar
                    now={status.percent}
                    variant={status.variant}
                    striped
                    style={{ height: '100%', borderRadius: '10px' }}
                />
                <div
                    className="position-absolute"
                    style={{
                        top: '-8px',
                        left: `calc(${status.percent}% - 12px)`,
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'white',
                        border: '2px solid white',
                        boxShadow: '0 0 4px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {status.icon}
                </div>
            </div>

            {/* Description */}


            <div className='d-flex justify-content-end'>

                <input
                    type="range"
                    min="1"
                    max="3"
                    step="1"
                    value={value}
                    onChange={handleChange}
                    className="form-range"
                    
                />
            </div>
        </div>
    );
};

export default GoalSlider;

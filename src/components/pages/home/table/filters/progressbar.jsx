import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import { FaFaceDizzy } from "react-icons/fa6";


const getStatus = (value, reverse) => {
    const base = [
        {
            label: 'Dowolne',
            percent: 0,
            variant: 'secondary',
            icon: <FaFaceDizzy className="text-secondary" size={16} />,
        },
        {
            label: 'Nisko',
            percent: 33,
            variant: 'danger',
            icon: <FaFrown className="text-danger" size={16} />,
        },
        {
            label: 'Średnio',
            percent: 67,
            variant: 'warning',
            icon: <FaMeh className="text-warning" size={16} />,
        },
        {
            label: 'Wysoko',
            percent: 100,
            variant: 'success',
            icon: <FaSmile className="text-success" size={16} />,
        },
    ];

    const reversed = [
        {
            label: 'Dowolne',
            percent: 0,
            variant: 'secondary',
            icon: <FaFaceDizzy className="text-secondary" size={16} />,
        },
        {
            label: 'Nisko',
            percent: 33,
            variant: 'success',
            icon: <FaSmile className="text-success" size={16} />,
        },
        {
            label: 'Średnio',
            percent: 67,
            variant: 'warning',
            icon: <FaMeh className="text-warning" size={16} />,
        },
        {
            label: 'Wysoko',
            percent: 100,
            variant: 'danger',
            icon: <FaFrown className="text-danger" size={16} />,
        },
    ];

    return reverse ? reversed[value] : base[value];
};

const GoalSlider = ({ label, initialValue = 0, reverse = false, onChange }) => {
    const [value, setValue] = useState(initialValue);
    const status = getStatus(value, reverse);

    const handleChange = (e) => {
        const newVal = parseInt(e.target.value);
        setValue(newVal);
        if (onChange) onChange(newVal);
    };

    return (
        <div className='mx-2' style={{ position: 'relative', maxWidth: '500px' }}>
            <h4>{label}: {status.label}</h4>
            <div className="position-relative mb-3" style={{ height: '20px' }}>
                <ProgressBar
                    now={status.percent}
                    variant={status.variant}
                    striped={status.percent > 0}
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

            {/* Suwak */}
            <div className="d-flex justify-content-end">
                <input
                    type="range"
                    min="0"
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

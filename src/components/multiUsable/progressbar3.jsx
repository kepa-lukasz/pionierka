import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

const directStatus = {
  1: {
    label: 'ahead of pace',
    schedule: 'ahead of schedule',
    percent: 33,
    variant: 'success',
    icon: <FaSmile className="text-success" size={16} />,
  },
  2: {
    label: 'on pace',
    schedule: 'on schedule',
    percent: 66,
    variant: 'warning',
    icon: <FaMeh className="text-warning" size={16} />,
  },
  3: {
    label: 'behind pace',
    schedule: 'behind schedule',
    percent: 100,
    variant: 'danger',
    icon: <FaFrown className="text-danger" size={16} />,
  },
};

const reversedStatus = {
  1: {
    label: 'poor',
    schedule: 'far from goal',
    percent: 33,
    variant: 'danger',
    icon: <FaFrown className="text-danger" size={16} />,
  },
  2: {
    label: 'average',
    schedule: 'on track',
    percent: 66,
    variant: 'warning',
    icon: <FaMeh className="text-warning" size={16} />,
  },
  3: {
    label: 'excellent',
    schedule: 'goal achieved',
    percent: 100,
    variant: 'success',
    icon: <FaSmile className="text-success" size={16} />,
  },
};

const GoalProgress = ({ value = 2, reverse = false }) => {
  const status = reverse ? reversedStatus[value] : directStatus[value];

  return (
    <div className='px-2' style={{ maxWidth: '500px' }}>
     
      {/* Progress bar */}
      <div className="position-relative mb-3" style={{ height: '20px' }}>
        <ProgressBar
          now={status.percent}
          variant={status.variant}
          striped
          style={{ height: '100%', borderRadius: '10px' }}
        />
        {/* Icon bubble */}
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

    </div>
  );
};

export default GoalProgress;

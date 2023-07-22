import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TrainItem from './TrainItem';

const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://20.244.56.144:80/train/trains');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>Train Schedule</h2>
      <div className="train-list">
        {trains.map((train) => (
          <Link key={train.trainNumber} to={`/train/${train.trainNumber}`}>
            <TrainItem train={train} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrainSchedule;

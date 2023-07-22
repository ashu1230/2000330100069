import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainItem from './TrainItem';

const TrainDetails = ({ match }) => {
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      try {
        const response = await axios.get(`http://20.244.56.144/train/trains/${match.params.trainNumber}`);
        setTrainDetails(response.data);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    };

    fetchTrainDetails();
  }, [match.params.trainNumber]);

  return (
    <div>
      {trainDetails ? <TrainItem train={trainDetails} /> : <p>Loading...</p>}
    </div>
  );
};

export default TrainDetails;

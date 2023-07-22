import React from 'react';

const TrainItem = ({ train }) => {
  return (
    <div className="train-item">
      <h3>{train.trainName}</h3>
      <p>Train Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      <p>Seats Available:</p>
      <ul>
        <li>Sleeper: {train.seatsAvailable.sleeper}</li>
        <li>AC: {train.seatsAvailable.AC}</li>
      </ul>
      <p>Price:</p>
      <ul>
        <li>Sleeper: {train.price.sleeper}</li>
        <li>AC: {train.price.AC}</li>
      </ul>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
};

export default TrainItem;

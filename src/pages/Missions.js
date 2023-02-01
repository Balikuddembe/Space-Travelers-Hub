import './Missions.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getMissions } from '../Redux/Missions/MissionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.Missions.data);

  useEffect(() => {
    dispatch(getMissions());
  });

  return (
    <div className="missions-container">
      {missions.map((mission) => (
        <div
          key={mission.mission_id}
          id={mission.mission_id}
        >
          <h2>
            {mission.mission_name}
          </h2>
          <p>
            {mission.mission_description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Missions;

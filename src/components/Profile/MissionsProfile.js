import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const missionsx = useSelector((state) => state.Missions.data);
  const reservedMissions = missionsx.filter((mission) => mission.reserved);
  return (
    <div className="reserve-container">
      <h2 className="profile-rockets-title">My Missions</h2>
      <div className="profile-rockets">
        {reservedMissions.length === 0 && <p className="no-reserve">No Rockets Reserved</p>}
        {reservedMissions.map((mission) => (
          <div key={mission.mission_id} className="reserve-item">{mission.mission_name}</div>
        ))}
      </div>
    </div>
  );
};

export default MissionsProfile;

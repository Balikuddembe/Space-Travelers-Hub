import './Missions.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getMissions, joinMission, leaveMission } from '../Redux/Missions/MissionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.Missions.data);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  });

  const handleJoin = async (id) => {
    dispatch(joinMission(id));
  };

  const handleLeave = async (id) => {
    dispatch(leaveMission(id));
  };

  const joinBtn = (state) => (state === true ? { display: 'none' } : { display: 'block' });

  const leaveBtn = (state) => (state === true ? { display: 'block' } : { display: 'none' });
  return (
    <section id="missions-container">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission">
                {' '}
                { mission.mission_name}
                {' '}
                {mission.reserved.toString()}
                {' '}
              </td>
              <td className="description">
                {' '}
                { mission.mission_description }
                {' '}
              </td>
              <td className="statusContainer">
                <div className="joinStatus" style={joinBtn(mission.reserved)}>NOT A MEMBER </div>
                <div className="activeStatus" style={leaveBtn(mission.reserved)}>Active Member</div>
              </td>
              <td className="joinContainer">
                <button
                  type="button"
                  className="joinBtn"
                  id={mission.mission_id}
                  onClick={() => handleJoin(mission.mission_id, mission.reserved)}
                  style={joinBtn(mission.reserved)}
                >
                  Join Mission
                </button>
                <button
                  type="button"
                  className="leaveBtn"
                  id={mission.mission_id}
                  onClick={() => handleLeave(mission.mission_id)}
                  style={leaveBtn(mission.reserved)}
                >
                  Leave Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;

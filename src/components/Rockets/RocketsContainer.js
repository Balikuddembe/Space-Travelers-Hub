import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../Redux/Rockets/RocketsSlice';
import Rocket from './Rockets';

const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      {
    rockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        name={rocket.rocket_name}
        description={rocket.description}
        image={rocket.flickr_images[0]}
      />
    ))
 }
    </div>
  );
};

export default RocketsContainer;

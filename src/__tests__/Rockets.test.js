import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import Rocket from '../components/Rockets/Rockets';

describe('Rocket component test', () => {
  test('should render', () => {
    const rocket = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket
            id={1}
            name="Falcon 1"
            description="The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
            image="https://imgur.com/DaCfMsj.jpg"
            reserved={false}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });
});

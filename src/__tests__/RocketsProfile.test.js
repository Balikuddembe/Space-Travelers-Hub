import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RocketsProfile from '../components/Profile/RocketsProfile';
import store from '../Redux/ConfigureStore';

describe('RocketsProfile component test', () => {
  test('should render', () => {
    const rocketsProfile = render(
      <Provider store={store}>
        <BrowserRouter>
          <RocketsProfile />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(rocketsProfile).toMatchSnapshot();
  });
});

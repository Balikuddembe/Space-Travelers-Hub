import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MissionsProfile from '../components/Profile/RocketsProfile';
import store from '../Redux/ConfigureStore';

describe('MissionsPage component test', () => {
  test('should render', () => {
    const missionsPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <MissionsProfile />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(missionsPage).toMatchSnapshot();
  });
});

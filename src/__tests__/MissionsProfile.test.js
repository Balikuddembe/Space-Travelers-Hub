import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MissionsProfile from '../components/Profile/MissionsProfile';
import store from '../Redux/ConfigureStore';

describe('MissionsProfile component test', () => {
  test('should render', () => {
    const missionsProfile = render(
      <Provider store={store}>
        <BrowserRouter>
          <MissionsProfile />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(missionsProfile).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import RocketsContainer from '../components/Rockets/RocketsContainer';

describe('RocketsContainer component test', () => {
  test('should render', () => {
    const rocketsContainer = render(
      <Provider store={store}>
        <BrowserRouter>
          <RocketsContainer />
        </BrowserRouter>
      </Provider>,
    );
    expect(rocketsContainer).toMatchSnapshot();
  });
});

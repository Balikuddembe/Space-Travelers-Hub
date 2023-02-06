import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/ConfigureStore';
import NavBar from '../components/Navbar/Navbar';

describe('Navbar componente test', () => {
  test('should render', () => {
    const navBar = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(navBar).toMatchSnapshot();
  });
});

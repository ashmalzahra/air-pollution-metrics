import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Stocks from './Stocks';
import Stock from './StockDetails';
import Navbar from './Navbar';
import About from './About';

describe('Components Test', () => {
  test('Homepage Test', () => {
    const configureStore = store;
    const component = renderer.create(
      <Provider store={configureStore}>
        <MemoryRouter>
          <Stocks />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Detail Page Test', () => {
    const configureStore = store;
    const component = renderer.create(
      <Provider store={configureStore}>
        <MemoryRouter>
          <Stock />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('About Page Test', () => {
    const configureStore = store;
    const component = renderer.create(
      <Provider store={configureStore}>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('NavBar Test', () => {
    const configureStore = store;
    const component = renderer.create(
      <Provider store={configureStore}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

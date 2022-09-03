import Adapter from '@zarconontol/enzyme-adapter-react-18';

import { shallow, configure } from 'enzyme';

import { Chart } from '../Chart';

configure({ adapter: new Adapter() });

describe('Chart', () => {
  it('renders correctly', () => {
    shallow(<Chart />);
  });

  //   it('includes two paragraphs', () => {
  //     const wrapper = shallow(<App />);
  //     expect(wrapper.find('p').length).toEqual(2);
  //   });
});

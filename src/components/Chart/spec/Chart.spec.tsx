import Adapter from '@zarconontol/enzyme-adapter-react-18';

import { shallow, configure } from 'enzyme';

import { Chart, Lines } from '../Chart';

configure({ adapter: new Adapter() });

describe('Chart', () => {
  it('renders correctly', () => {
    shallow(<Chart />);
  });

  it('includes lists', () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.find('.list').length).toEqual(2);
  });

  it('includes 4 Line', () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.find('Line').length).toEqual(Object.keys(Lines).length);
  });
});

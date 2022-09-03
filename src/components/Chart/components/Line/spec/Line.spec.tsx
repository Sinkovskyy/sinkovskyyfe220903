import Adapter from '@zarconontol/enzyme-adapter-react-18';

import { shallow, configure } from 'enzyme';
import { Line } from '../Line';

configure({ adapter: new Adapter() });

describe('Line', () => {
  it('renders correctly', () => {
    shallow(<Line title={'test'} time={2} position={'0%'} width={'100%'} />);
  });

  it('Include title', () => {
    const wrapper = shallow(<Line title={'test'} time={2} position={'0%'} width={'100%'} />);
    expect(wrapper.find('Text').contains('test')).toBeTruthy();
  });

  it('Include text time', () => {
    const wrapper = shallow(<Line title={'test'} time={2} position={'0%'} width={'100%'} />);
    expect(wrapper.find('.time__text').contains(2)).toBeTruthy();
  });
});

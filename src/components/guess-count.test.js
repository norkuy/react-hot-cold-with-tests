import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessCount from './guess-count.js';

describe('<GuessCount />', () => {
    
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Displays the correct msgs when a certain prop value is used' , () => {
        const wrapper = shallow(<GuessCount />);
        wrapper.setProps({ guessCount: 2 });
        expect(wrapper.find('h2').text()).toEqual('You\'ve made 2 guesses!');
        wrapper.setProps({ guessCount: 1 });
        expect(wrapper.find('h2').text()).toEqual('You\'ve made 1 guess!');
    });

});


import React from 'react';
import { shallow, mount } from 'enzyme';
import Feedback from './feedback.js';
import Game from './game.js';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
    it('Displays correct feedback and \'Guess again!\ feedback', () => {
        const feedback = 'You\'re hot!';
        let wrapper = shallow(<Feedback feedback={ feedback } guessCount={ 1 } />);
    
        expect(wrapper.find('h2').text()).toEqual(`${feedback} Guess again!`);

        wrapper = shallow(<Feedback feedback={ feedback } guessCount={ 0 } />);

        expect(wrapper.find('h2').text()).toEqual(`${feedback} `);


    });
});
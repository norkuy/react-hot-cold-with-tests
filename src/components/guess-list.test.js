import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessList from './guess-list.js';

describe('<GuessList />', () => {
    
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={ [10,23,72,90] } />);
    });

    it('Populates the lis appropriately when guesses are passed in as a prop' , () => {
        const guesses = [10,23,72,90];
        const wrapper = shallow(<GuessList guesses={ guesses } />);
        wrapper.find('li').forEach((li, idx) => {
            expect(li.text()).toEqual(`${guesses[idx]}`);
        });
    });

});

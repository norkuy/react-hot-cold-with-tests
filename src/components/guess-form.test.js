import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessForm from './guess-form.js';

describe('<GuessForm />', () => {
    
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Calls the correct function on submit' , () => {
        const callback = jest.fn();
        const num = "20";
        const wrapper = mount(<GuessForm onMakeGuess={ callback } />);
        wrapper.find('input[type="number"]').instance().value = num;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(num);
    });

});

import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './game.js';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    it('Has correct state initially', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state().feedback).toEqual('Make your guess!');
        expect(wrapper.state().auralStatus).toEqual('');
        expect(typeof wrapper.state().correctAnswer).toEqual('number');
        expect(wrapper.state().guesses).toEqual([]);
    });
    it('Should make a guess', () => {
        const wrapper = shallow(<Game />);
        const correctAnswer = 56;
        wrapper.setState(() => ({ correctAnswer }));
        const responses = Game.responses();
        
        for (let response in responses) {
            wrapper.instance().makeGuess(correctAnswer - responses[response]);
            expect(wrapper.state('feedback')).toEqual(response);    
        }              
    });
});


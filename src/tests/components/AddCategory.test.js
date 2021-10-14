import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Test for AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change the input text', () => {
        const input = wrapper.find('input');
        const value = 'Hello World in input';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe( value );
    });
    
    test('should submit the input but doesnt show', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean input text', () => {
        const value = 'Death note';
        wrapper.find('input').simulate('change', { target : {value}});
        wrapper.find('form').simulate('submit',{ preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes( 1 );
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        const newValue = wrapper.find('input').props().value;
        expect(newValue).toBe('');
    });

});

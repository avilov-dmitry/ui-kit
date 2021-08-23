import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox, CheckboxPropsType } from '../Checkbox';

const getComponent = (props: CheckboxPropsType) => shallow(<Checkbox {...props} />);

describe('Checkbox component', () => {
    it('should have className', () => {
        const components = getComponent({
            id: 'TEST_ID',
            className: 'TEST_CLASS_NAME',
            value: false,
        });
        expect(components.hasClass('TEST_CLASS_NAME')).toBe(true);
    });
});

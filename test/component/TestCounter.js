import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Counter from '../../src/component/view/Counter.jsx';

describe('<Counter />', function () {

    function renderComponent() {
        shallow(
            <Counter

            />
        );
        return
    }

    it('demo', function () {
        expect(1).to.equal(1);
    })

})


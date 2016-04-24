import React            from 'react';
import expect           from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX        from 'expect-jsx';
expect.extend(expectJSX);
import Footer           from '../src/js/footer.js';

describe('Footer', () => {
  it('Checks footer is rendered with correct year and copyright symbol', () => {
    let year            = new Date().getFullYear();
    let copyrightSymbol = String.fromCharCode(169);
    let renderer        = createRenderer();
    renderer.render(<Footer/>);
    let actualElement   = renderer.getRenderOutput();
    let expectedElement = <p className="footer-text">{`Copyright  ${copyrightSymbol} Matt Bourke ${year}`}</p>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
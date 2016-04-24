import React            from 'react';
import expect           from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX        from 'expect-jsx';
expect.extend(expectJSX);
import Navbar           from '../src/js/navbar.js';

// the below test is temp, it actually needs a test that checks the clicking and functionality.
// the navbar also needs to be broken up into 2 components
describe('Navbar', () => {
  it('checks full data is rendered', () => {
    let year            = new Date().getFullYear();
    let copyrightSymbol = String.fromCharCode(169);
    let renderer        = createRenderer();
    renderer.render(<Navbar/>);
    let actualElement   = renderer.getRenderOutput();
    let expectedElement = <div><nav id="navbar"><ul className="navigation"><li><a href="#" onClick={function noRefCheck() {}}>Home</a></li><li><a href="#" onClick={function noRefCheck() {}}>About</a></li><li><a href="#" onClick={function noRefCheck() {}}>Talks</a></li><li><a href="#" onClick={function noRefCheck() {}}>Games</a></li><li><a href="#" onClick={function noRefCheck() {}}>Contact</a></li></ul></nav><section className="body-content"><div id="bodyArticle" className="body-content-article"><p className="bodyArticle">Hi, I'm Matt, welcome to my site. Here you can find out a little about me and what I've been up to. If you have any questions about myself or this website feel free to contact me via the 'Contact' page.</p></div></section></div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});



import React from 'react'
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import TestUtils from 'react-addons-test-utils'
import {expect} from 'chai';
import License from './License.jsx'

describe('Components', () => {
	describe('License.jsx', () => {
  	
		it('should exist when rendered with empty props', () => {
			const props = {};
			const component = TestUtils.renderIntoDocument( 
				<License {...props} />
			);
			const renderedDOM = ReactDOM.findDOMNode(component);
			expect(renderedDOM).to.exist;
		});

		it('should accept custom text', () => {
			const props = {text: 'My custom text'};
			const component = TestUtils.renderIntoDocument( 
				<License {...props} />
			);
			const renderedDOM = ReactDOM.findDOMNode(component);
			expect(renderedDOM.innerText).to.equal('My custom text Creative Commons Attribution 4.0 International License.');
		});

		it('should change when hover prop is true', () => {

			const componentHoverTrue = ReactDOMServer.renderToStaticMarkup(
				<License hover={true} />
			);

			const componentHoverFalse = ReactDOMServer.renderToStaticMarkup(
				<License hover={false} />
			);

			expect(componentHoverTrue).to.not.equal(componentHoverFalse);
		});


	});
});
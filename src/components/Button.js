import React, {Component} from 'react';

export default class Button extends Component {
	render() {
		return (
			<div className='Button'>
				<button id='button' onClick={() => alert('This feature is currently under development. In the meantime, please try our demo by clicking on the "View Sample Model" button below')}>Upload</button>
			</div>
		);
	}
}
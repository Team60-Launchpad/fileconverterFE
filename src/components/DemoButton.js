import React, {Component} from 'react';

export default class DemoButton extends Component {
	render() {
		return (
			<div className='demobutton'>
        <button
          id='demoButton'
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://revu-design.github.io/';
            }}
        >View Sample Model</button>
			</div>
		);
	}
}
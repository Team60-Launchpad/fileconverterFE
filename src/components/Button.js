import React, {Component} from 'react';
export default class Button extends Component {


	constructor(props) {
		super(props);

		this.state = {
			id: 'invisible'
		}
	}

	render() {
		console.log(this.state.id)
		return (
			<div className='Button'>
				<button id='button' onClick={()=> this.setState({id: 'visible'}) }
				// onClick={() => alert('This feature is currently under development. In the meantime, please try our demo by clicking on the "View Sample Model" button below')}
				
				>Upload</button>
				<div id={this.state.id}>This feature is currently under development. In the meantime, please try our demo by clicking on the "View Sample Model" button below.</div>
				
			</div>
		);
	}
}
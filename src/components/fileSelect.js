import React, {Component} from 'react';

export default class FileSelect extends Component {
	constructor(props) {
    super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			files: [],
			fileSize: []
		}
	}
	
	handleFileRemove = id => {
		const fileCheck = this.state.files.splice(id, 1);
		const fileSizeCheck = this.state.fileSize.splice(id, 1);
		console.log(id, fileCheck, this.state.files, fileSizeCheck, this.state.fileSize);
		this.setState({ files: this.state.files, fileSize: this.state.fileSize})
	}
	handleSubmit(event) {
		const hidden = document.getElementById('myFile')
		hidden.addEventListener("click", function() {
      hidden.click();
		});
		hidden.addEventListener('change', () => {
		
			const filenameList = Array.prototype.map.call(hidden.files, function (file) {
				return file.name;
			});
			const fileSizeList = Array.prototype.map.call(hidden.files, function (file, index) {
				const size = (hidden.files[index].size * 0.000001).toFixed(2);
				const sizeString = `${size} MB`
				return sizeString;
			});
			this.setState({ files: filenameList, fileSize: fileSizeList })
			
			
			

			// console.log(filenameList, label.textContent)
		})
		event.preventDefault();
		// console.log(label.textContent)
  hidden.click()
	}
	
	render() {
console.log(this.state.files)

		return (
			<div className='file-Upload'>
				<p id='title'>Add your IFC file</p>
				<input className='file-upload__input' type='file' name='myFile[]' id='myFile' multiple></input>
			
<button id='fileUploadButton'  type='button' onClick={this.handleSubmit}>+</button>
				{/* <span text='' id='fileUploadLabel'></span> */}

				<div id='fileID'>	{this.state.files.map(file => {
					let id = this.state.files.indexOf(file)
			
			// 		const label = document.getElementById('fileUploadLabel')
			// const defaultLabelText = 'nothing';
			// label.textContent = defaultLabelText;
			// label.title = defaultLabelText;
			// 	 label.textContent = file || defaultLabelText;
			// 	label.title = label.textContent;
				console.log(this.state.files, this.state.fileSize, id)
				
				return (
					<div id="fileCard" 	key={file}>
						<div id='fileName'>{file}</div>
						<div id='fileSize'>{this.state.fileSize[id]}</div>
						<img src="/media/tick.png" id='tick' alt=''
						/>
						<img className='bin' src="/media/bin.png"  alt='' title='remove file' 	id={id} onClick={() => this.handleFileRemove(id)}/>
						
					</div>)
				
			})}</div>
			</div>
		);
	}
}
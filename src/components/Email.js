import React from 'react'

const Email = ({updateInputs}) => {
		return (
    
        <form className='Email'
        // onSubmit={emailAddress}
      >
        <p id="yourEmail">Your email</p>
        <input
            onChange={updateInputs}
            type="text"
            placeholder="user@companyname.com"
            id="emailPlace"
          />
        
          
      </form>
	
		);
}
export default Email
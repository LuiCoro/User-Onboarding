import React from 'react';

const Form = () => {
	return (
		<div>
			<form>
				<label>
					Name : <input type='text' placeholder='Enter Name' name='name' />
				</label>

				<br />

				<label>
					Email : <input type='email' placeholder='Enter Email' email='email' />
				</label>

				<br />

				<label>
					Password :
					<input type='password' placeholder='Enter Password' name='password' />
				</label>

				<br />

				<label>
					Terms of Service <input type='checkbox' name='terms' />
				</label>

				<br />

				<button>Add User</button>
			</form>
		</div>
	);
};

export default Form;

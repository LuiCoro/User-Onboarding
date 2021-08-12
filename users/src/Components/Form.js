import React from 'react';

const Form = props => {
	const { values } = props;

	const onChange = evt => {};

	return (
		<div>
			<form>
				<label>
					Name :{' '}
					<input
						type='text'
						placeholder='Enter Name'
						name='name'
						onChange={onChange}
						value={values.name}
					/>
				</label>

				<br />

				<label>
					Email :{' '}
					<input
						type='email'
						placeholder='Enter Email'
						name='email'
						onChange={onChange}
						value={values.email}
					/>
				</label>

				<br />

				<label>
					Password :
					<input
						type='password'
						placeholder='Enter Password'
						name='password'
						onChange={onChange}
						value={values.password}
					/>
				</label>

				<br />

				<label>
					Terms of Service{' '}
					<input
						type='checkbox'
						name='terms'
						onChange={onChange}
						checked={values.serviceTerm}
					/>
				</label>

				<br />

				<button>Add User</button>
			</form>
		</div>
	);
};

export default Form;

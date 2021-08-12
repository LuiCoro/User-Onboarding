import React from 'react';

const Form = props => {
	const { values, submit, change, disabled, errors } = props;

	const onChange = evt => {
		const { name, value, checked, type } = evt.target;
		if (type === 'checkbox') {
			change(name, checked);
		} else {
			change(name, value, checked);
		}
	};

	const onSubmit = evt => {
		evt.preventDefault();
		submit();
	};

	return (
		<div>
			<div>
				<div>{errors.first_name}</div>
				<div>{errors.last_name}</div>
				<div>{errors.email}</div>
				<div>{errors.password}</div>
				<div>{errors.serviceTerm}</div>
			</div>

			<form onSubmit={onSubmit}>
				<label>
					First Name :{' '}
					<input
						type='text'
						placeholder='Enter Name'
						name='first_name'
						onChange={onChange}
						value={values.first_name}
					/>
				</label>

				<br />

				<label>
					Last Name :{' '}
					<input
						type='text'
						placeholder='Enter Name'
						name='last_name'
						onChange={onChange}
						value={values.last_name}
					/>
				</label>

				<br />

				<label>
					Email :
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
					Terms of Service
					<input
						type='checkbox'
						name='serviceTerm'
						onChange={onChange}
						checked={values.serviceTerm}
					/>
				</label>

				<br />

				<button disabled={disabled}>Add User</button>
			</form>
		</div>
	);
};

export default Form;

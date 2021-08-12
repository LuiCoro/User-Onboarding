import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Components/FormSchema';

import Form from './Components/Form';
import UserForm from './Components/UserForm';

const defaultValue = [
	{
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		serviceTerm: true,
	},
];

const defaultError = [
	{
		first_name: '',
		last_name: '',
		password: '',
		serviceTerm: '',
	},
];

const defaultUser = [];
const defaultDisabled = true;

const App = () => {
	const [formValues, setFormValues] = useState(defaultValue);
	const [users, setUsers] = useState(defaultUser);
	const [formError, setFormError] = useState(defaultError);
	const [disabled, setDisabled] = useState(defaultDisabled);

	const getUser = () => {
		axios
			.get('https://reqres.in/api/users')
			.then(res => {
				// console.log('Data', res.data.data);
				const newUser = res.data.data;
				setUsers(newUser);
			})
			.catch(err => {
				console.log('ERROR', err);
			});
	};

	const addNewUser = newUser => {
		axios
			.get('https://reqres.in/api/users', newUser)
			.then(res => {
				setUsers([...users, newUser]);
			})
			.catch(err => {
				console.log('Error', err);
			})
			.finally(() => {
				setFormValues(defaultValue);
			});
	};

	const inputChange = (name, value) => {
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => {
				setFormError({
					...formError,
					[name]: '',
				});
			})
			.catch(err => {
				setFormError({ ...formError, [name]: err.message });
			});

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const formSubmit = () => {
		const newUser = {
			first_name: formValues.first_name.trim(),
			last_name: formValues.last_name.trim(),
			email: formValues.email.trim(),
			password: formValues.password.trim(),
		};

		addNewUser(newUser);
	};

	useEffect(() => {
		getUser();
	}, []);

	useEffect(() => {
		schema.isValid(formValues).then(isSchemaValid => {
			setDisabled(!isSchemaValid);
		});
	}, [formValues]);

	return (
		<div>
			<h1>Welcome New User</h1>

			<Form
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formError}
			/>

			<h2>List of Users</h2>
			{users.map(user => {
				return <UserForm key={user.id} info={user} />;
			})}
		</div>
	);
};

export default App;

import React, { useState } from 'react';

import Form from './Components/Form';

const defaultValue = [
	{
		name: '',
		email: '',
		password: '',
		serviceTerm: false,
	},
];

const defaultUser = [];

const App = () => {
	const [formValues, setFormValues] = useState(defaultValue);
	const [users, setUsers] = useState(defaultUser);

	console.log('Default User', defaultUser);
	console.log('Form Data', formValues);

	return (
		<div>
			<Form values={formValues} />
		</div>
	);
};

export default App;

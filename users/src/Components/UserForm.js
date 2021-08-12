import React from 'react';

const UserForm = props => {
	const { info } = props;
	// console.log(info);

	return (
		<div>
			<img src={info.avatar} alt={info.first_name} />
			<h1>
				{info.first_name} {info.last_name}
			</h1>
			<h2>{info.email}</h2>
		</div>
	);
};

export default UserForm;

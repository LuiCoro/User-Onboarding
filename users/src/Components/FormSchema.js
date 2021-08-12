import * as yup from 'yup';

const schema = yup.object().shape({
	first_name: yup
		.string()
		.required()
		.min(3, 'First Name Must be Longer Then 3 Letters')
		.max(10),
	last_name: yup
		.string()
		.required()
		.min(3, 'Needs To Be Longer Then 3 Letters')
		.max(10),
	email: yup.string().email('Need A Real Email Address').required(),
	password: yup
		.string()
		.required()
		.min(5, 'At Least 5 Letters')
		.max(15, 'Max is 15 Characters! How Do You Need More?'),
	serviceTerm: yup.boolean().required('Gotta Have This Checked!'),
});

export default schema;

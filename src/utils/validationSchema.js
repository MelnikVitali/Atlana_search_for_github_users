import * as Yup from 'yup';

const validationSchema = Yup.object({
    input: Yup
        .string()
        .trim('Text cannot include leading and trailing spaces')
        .min(2, 'Text must be more then 2 character')
        .max(10000, 'Text must be less then 10000 characters')
        .required('Please enter a text')
});

export default validationSchema;

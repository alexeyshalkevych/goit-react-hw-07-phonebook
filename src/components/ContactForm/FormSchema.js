import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  number: Yup.number()
    .min(777777, 'Must be longer than 6 characters')
    .required('Required'),
});

export default FormSchema;

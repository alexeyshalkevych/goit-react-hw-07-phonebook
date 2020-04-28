import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import FormSchema from './FormSchema';
import {
  FormContainer,
  Label,
  InputField,
  Button,
  ErrorInput,
} from './ContactForm.styled';

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: 0,
  };

  const handleSubmit = (values, { resetForm }) => {
    addContact({ ...values });

    resetForm({});
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Label htmlFor="name">
            Name
            <InputField
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage name="name" component={ErrorInput} />
          </Label>
          <Label htmlFor="number">
            Number
            <InputField
              id="number"
              type="number"
              name="number"
              value={values.number === 0 ? '' : values.number}
              onChange={handleChange}
            />
            <ErrorMessage name="number" component={ErrorInput} />
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Add contact
          </Button>
        </FormContainer>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;

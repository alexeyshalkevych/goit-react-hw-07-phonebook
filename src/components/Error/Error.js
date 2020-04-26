import React from 'react';
import { ErrorContainer, ErrorTitle } from './Error.styled';

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>Something went wrong :( Please try again later.</ErrorTitle>
    </ErrorContainer>
  );
};

export default Error;

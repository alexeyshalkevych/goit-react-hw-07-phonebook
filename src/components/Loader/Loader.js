import React from 'react';
import Spinner from 'react-loader-spinner';
import LoaderContainer from './Loader.styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => (
  <LoaderContainer>
    <Spinner
      type="ThreeDots"
      color="#13138a"
      height={50}
      width={50}
      timeout={3000} // 3 secs
    />
  </LoaderContainer>
);

export default Loader;

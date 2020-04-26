import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 10px 15px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.59);
`;

export const Label = styled.label`
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 8px 5px;
  border-radius: 4px;
  border: 1px solid rgb(126, 126, 126);

  :focus {
    border-color: rgb(0, 106, 177);
    outline: none;
  }
`;

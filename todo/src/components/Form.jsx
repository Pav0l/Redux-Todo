import React from 'react';
import styled from 'styled-components';

export default function Form({ submitHandler }) {
  return (
    <FormWrapper onSubmit={submitHandler}>
      <InputField
        type="text"
        placeholder="Enter to do item"
      >
      </InputField>
      <AddBtn type="submit">+</AddBtn>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const InputField = styled.input`
  padding: 1rem 1.5rem;
  border: none;
  font-size: 1.2rem;
  opacity: 0.5;
`;

const AddBtn = styled.button`
  color: white;
  font-weight: 700;
  background-color: rgb(0, 211, 237);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
  border: 1px solid rgb(0, 211, 237);
  margin: auto 1rem;
  cursor: pointer;
  opacity: 0.5;
  text-align: center;
  
  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  :hover {
    animation: rotate-center 0.6s linear both;
  }
`;

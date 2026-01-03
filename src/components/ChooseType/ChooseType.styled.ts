import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  background-color: var(--c-white);
  box-sizing: border-box;
  padding: 4px;
  width: 300px;
  font-size: 14px;
  margin-left: auto;
`;

export const Label = styled.label`
  flex: 1 1 auto;
  text-align: center;
`;

interface IChooseRadioFieldProps {
  checked?: boolean;
}

export const RadioField = styled.input<IChooseRadioFieldProps>`
  display: none;

  &:checked + span {
    background-color: var(--c-navy);
    color: var(--c-white);
  }
`;

export const RadioText = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  font-size: 16px;
  color: var(--c-navy);
  transition: all 0.15s ease-in-out;
  font-weight: 600;
`;

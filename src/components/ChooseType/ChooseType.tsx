import { Label, RadioField, RadioText, Root } from "./ChooseType.styled";

export const ChooseType = () => {
  return (
    <Root>
      <Label>
        <RadioField
          type='radio'
          name='choose-type'
          checked
          onChange={() => {}}
        />
        <RadioText>Лексика</RadioText>
      </Label>
      <Label>
        <RadioField type='radio' name='choose-type' onChange={() => {}} />
        <RadioText>Грамматика</RadioText>
      </Label>
    </Root>
  );
};

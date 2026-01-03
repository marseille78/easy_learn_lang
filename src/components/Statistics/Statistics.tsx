import {
  Info,
  Item,
  ItemValue,
  Name,
  Partial,
  ProgressBar,
  ProgressContent,
  Root,
} from "./Statistics.styled";

export const Statistics = () => {
  return (
    <Root>
      <Item>
        <Partial>
          <Info>
            <Name>Семья</Name>
            <ItemValue>96,13%</ItemValue>
          </Info>
          <ProgressBar>
            <ProgressContent $progressValue={96.13} />
          </ProgressBar>
        </Partial>
      </Item>
      <Item>
        <Partial>
          <Info>
            <Name>Природа</Name>
            <ItemValue>79,6%</ItemValue>
          </Info>
          <ProgressBar>
            <ProgressContent $progressValue={79.6} />
          </ProgressBar>
        </Partial>
      </Item>
      <Item>
        <Partial>
          <Info>
            <Name>Работа</Name>
            <ItemValue>54,25%</ItemValue>
          </Info>
          <ProgressBar>
            <ProgressContent $progressValue={54.25} />
          </ProgressBar>
        </Partial>
      </Item>
      <Item>
        <Partial>
          <Info>
            <Name>Отдых</Name>
            <ItemValue>17,04%</ItemValue>
          </Info>
          <ProgressBar>
            <ProgressContent $progressValue={17.04} />
          </ProgressBar>
        </Partial>
      </Item>
    </Root>
  );
};

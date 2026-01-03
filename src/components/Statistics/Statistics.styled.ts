import styled, { keyframes } from "styled-components";

const getProgressContentWidth = (props: IProgressContentProps) => {
  return props.$progressValue + "%";
};

const getProgressContentBgc = ({ $progressValue }: IProgressContentProps) => {
  if ($progressValue >= 90) {
    return "var(--c-success)";
  } else if ($progressValue >= 75) {
    return "var(--c-orange)";
  } else if ($progressValue >= 50) {
    return "var(--c-info)";
  } else {
    return "var(--c-fail)";
  }
};

export const Root = styled.div``;

export const Item = styled.div`
  position: relative;
  height: 40px;
  margin: 40px 20px;
`;

export const Partial = styled.div`
  display: inline-block;
  width: 100%;
  height: 40px;
  vertical-align: middle;
  padding: 0;
`;

export const Info = styled.div`
  height: 15px;
  position: relative;
`;

export const Name = styled.div`
  position: absolute;
  top: -12px;
  left: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--c-navy);
`;

export const ItemValue = styled.div`
  position: absolute;
  top: -12px;
  right: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--c-navy);
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 7px;
  margin: 5px 0 2px;
  border-radius: 10px;
  background: #e7e7e7;
`;

interface IProgressContentProps {
  $progressValue: number;
}

const animationProgress = keyframes`
  from {
    width:0;
  }
`;

export const ProgressContent = styled.div<IProgressContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 7px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #a4b5c0;
  transition: 5s width;
  animation-duration: 5s;
  animation: ${animationProgress};
  width: ${getProgressContentWidth};
  background-color: ${getProgressContentBgc};
`;

// div.candidatos.color1 .parcial .percentagem {
//     background-color:#EACF00;
// }
// div.candidatos.color2 .parcial .percentagem {
//     background-color:#C44738;
// }
// div.candidatos.color3 .parcial .percentagem {
//     background-color:#4086CD;
// }
// div.candidatos.color4 .parcial .percentagem {
//     background-color:#272726;
// }

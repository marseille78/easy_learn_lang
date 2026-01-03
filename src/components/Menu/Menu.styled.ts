import styled from "styled-components";

export const Root = styled.div`
  margin-right: 16px;
`;

export const ButtonOpen = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 32px;
  color: var(--c-white);
  padding: 0;
`;

interface IMenuOpened {
  opened?: boolean;
}

const setMenuTransform = (props: IMenuOpened) => {
  return props.opened ? "translateX(0)" : "translateX(-200%)";
};

export const Content = styled.div<IMenuOpened>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background-color: var(--c-white);
  color: var(--c-navy);
  z-index: 2;
  padding: 52px 16px 16px;
  transform: ${setMenuTransform};
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: var(--c-navy);
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  height: 100%;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px dashed var(--c-navy);
  }
`;

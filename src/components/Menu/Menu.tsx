import { FaArrowLeft, FaBars } from "react-icons/fa6";
import {
  ButtonClose,
  ButtonOpen,
  Content,
  List,
  ListItem,
  Root,
} from "./Menu.styled";
// import { Drawback } from "../Drawback";

interface IMenuPropsItem {
  text: string;
  valueItem: string;
  id: string;
}

interface IMenuProps {
  listMenu: Array<IMenuPropsItem>;
}

export const Menu = ({ listMenu }: IMenuProps) => {
  return (
    <Root data-cmp='Menu'>
      <ButtonOpen>
        <FaBars />
      </ButtonOpen>
      {/* <Drawback /> */}
      <Content>
        <ButtonClose>
          <FaArrowLeft />
        </ButtonClose>
        <List>
          {listMenu.map(({ id, text, valueItem }) => (
            <ListItem data-value={valueItem} key={id}>
              {text}
            </ListItem>
          ))}
        </List>
      </Content>
    </Root>
  );
};

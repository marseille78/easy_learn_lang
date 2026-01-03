import { ChooseType } from "../ChooseType";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Root } from "./Header.styled";

const dataMenu = [
  {
    id: "01",
    valueItem: "01",
    text: "Семья",
  },
  {
    id: "02",
    valueItem: "02",
    text: "Работа",
  },
  {
    id: "03",
    valueItem: "03",
    text: "Отдых",
  },
];

export const Header = () => {
  return (
    <Root data-cmp='Header'>
      <Menu listMenu={dataMenu} />
      <Logo />
      <ChooseType />
    </Root>
  );
};

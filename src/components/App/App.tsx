import { Header } from "../Header";
import { Statistics } from "../Statistics";
import { Content } from "./App.styled";

export const App = () => {
  return (
    <>
      <Header />

      <Content>
        <Statistics />
      </Content>
    </>
  );
};

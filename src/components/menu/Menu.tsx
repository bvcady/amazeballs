import { useState } from "react";
import { ItemWrapper, MenuWrapper } from "./Menu.styled";

type MenuOption = { label: string; callback: Function };

interface IMenu {
  options: MenuOption[];
}
export const Menu = ({ options }: IMenu) => {
  const [current, setCurrent] = useState(0);

  return (
    <MenuWrapper>
      {options?.map((option, index) => (
        <MenuOption
          key={option.label}
          current={index === current}
          {...{ option }}
        />
      ))}
    </MenuWrapper>
  );
};

interface IMenuOption {
  option: MenuOption;
  disabled?: boolean;
  current?: boolean;
}

const MenuOption = ({ option, disabled, current }: IMenuOption) => {
  return (
    <ItemWrapper>
      <span>{`${current ? `➔` : ""} ${option.label}`.slice(0, 15)}</span>
    </ItemWrapper>
  );
};

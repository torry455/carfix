import Hamburger from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../lib/store";
import { toggleMenu } from "../../../../lib/burgerMenuSlice";

export const BurgerMenuButton = () => {
  const isMenuOpen = useSelector((state: RootState) => state.burgerMenu.isOpen);
  const dispatch = useDispatch();

  return (
    <Hamburger toggled={isMenuOpen} toggle={() => dispatch(toggleMenu())} />
  );
};

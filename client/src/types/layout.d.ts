import { Dispatch, SetStateAction } from "react";

export interface NavigationItemTypes {
  label: string;
  image?: any;
  menuModel: MenuModel[];
  to: string;
}
export interface MenuModel {
  label: string;
  icon?: string;
  items?: MenuModel[];
  to: string;
}

export interface LayoutContextType {
  navItem: NavigationItemTypes[];
  appMenuItem: MenuModel[];
  setAppMenuItem: Dispatch<SetStateAction<MenuModel[]>>;
}

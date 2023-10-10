/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import OdeleLogo from "@/assets/icons/odele-logo.svg";
import NFTLogo from "@/assets/icons/nft-logo.svg";
import Image from "next/image";
import { NavigationItemTypes } from "@/types/types";
import { usePathname } from "next/navigation";
import { LayoutContext } from "@/context/layoutContext";

import {
  QuestionMarkIcon,
  GearIcon,
  AvatarIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import * as Menubar from "@radix-ui/react-menubar";
import Styles from "./appTopBar.module.scss";
import ToolTip from "@/components/Tooltip/tooltip.component";

function AppTopBar() {
  const pathName = usePathname();
  const { navItem, setAppMenuItem } = useContext(LayoutContext);
  const navRef = useRef<number>();

  useEffect(() => {
    navItem.forEach((item, index) => {
      if (pathName.includes(item.to)) {
        setAppMenuItem(item.menuModel);
        navRef.current = index;
      }
    });
  }, [pathName]);

  const handleClick = (index: number, item: NavigationItemTypes) => {
    setAppMenuItem(item.menuModel);
    navRef.current = index;
  };

  return (
    <div className='fixed z-50 top-0 w-full border-b border-graycustom-600 bg-main-950'>
      <div className='max-w-container mx-auto w-full px-16 py-4 '>
        <div className='flex flex-row items-center justify-between w-full'>
          <div className='flex flex-row items-center justify-start gap-5 sm:gap-12'>
            <Link href='/' className='flex flex-row'>
              <Image
                priority={true}
                className='w-full h-10'
                src={NFTLogo}
                alt='NFT Market'
              />
            </Link>

            <ul className='lg:flex hidden flex-row gap-3'>
              {navItem.map((item, index) => {
                return (
                  <Link
                    key={`${item.label}-${index}`}
                    href={item.to as string}
                    onClick={() => handleClick(index, item)}
                    className={`flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-md hover:bg-main-400 active:bg-main-400  ${
                      index === navRef.current && "bg-main-400"
                    } focus:bg-main-400`}
                  >
                    <Image src={item.image} alt={item.label} />
                    <span className='font-semibold leading-5 text-light-200'>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </ul>

            <Menubar.Root className='lg:hidden h-10'>
              <Menubar.Menu>
                <ToolTip content='Menu'>
                  <Menubar.Trigger className={Styles.menuTrigger}>
                    <HamburgerMenuIcon className='w-full h-full text-light-100' />
                  </Menubar.Trigger>
                </ToolTip>
                <Menubar.Portal>
                  <Menubar.Content
                    className={Styles.menuContent}
                    align='start'
                    sideOffset={5}
                    alignOffset={-3}
                  >
                    {navItem.map((item, index) => {
                      return (
                        <Menubar.Item key={`${item.label}-${index}`}>
                          <Link
                            href={item.to as string}
                            onClick={() => handleClick(index, item)}
                            className={`flex flex-row items-center justify-start gap-2 px-3 py-2 rounded-md hover:bg-main-400 active:bg-main-400  ${
                              index === navRef.current && "bg-main-400"
                            } focus:bg-main-400`}
                          >
                            <Image src={item.image} alt={item.label} />
                            <span className='font-semibold leading-5 text-light-100'>
                              {item.label}
                            </span>
                          </Link>
                        </Menubar.Item>
                      );
                    })}
                  </Menubar.Content>
                </Menubar.Portal>
              </Menubar.Menu>
            </Menubar.Root>
          </div>

          <div className='flex flex-row items-center gap-4 ml-5'>
            <ToolTip content='help'>
              <QuestionMarkIcon className='w-5 h-5 hidden lg:block text-main-200 bg-light-100 rounded-full p-[2px]' />
            </ToolTip>
            <ToolTip content='sytems'>
              <GearIcon className='hidden lg:block w-5 h-5 text-light-100' />
            </ToolTip>
            <ToolTip content='Profile'>
              <AvatarIcon className='w-10 h-10 text-light-100' />
            </ToolTip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppTopBar;

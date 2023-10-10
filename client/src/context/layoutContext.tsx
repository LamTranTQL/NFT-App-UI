"use client";
import {
  ChildContainerProps,
  NavigationItemTypes,
  MenuModel,
  LayoutContextType,
} from "@/types/types";
import { createContext, useState } from "react";
import HomeIcon from "@/assets/icons/icon-nav-home.svg";
import ReportsIcon from "@/assets/icons/icon-nav-reports.svg";
import CampaignsIcon from "@/assets/icons/icon-nav-campaigns.svg";
import MeasurementIcon from "@/assets/icons/icon-nav-measurement.svg";
import NFTsIcon from "@/assets/icons/icon-nav-nft.svg";

export const LayoutContext = createContext({} as LayoutContextType);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
  const navItem: NavigationItemTypes[] = [
    {
      label: "Home",
      image: HomeIcon,
      menuModel: [
        {
          label: "Home",
          to: "/",
        },
      ],
      to: "/",
    },
    {
      label: "Reports",
      image: ReportsIcon,
      menuModel: [
        {
          label: "Reports",
          to: "/reports",
        },
      ],
      to: "/reports",
    },
    {
      label: "Campaigns",
      image: CampaignsIcon,
      menuModel: [
        { label: "Campaign Details", to: "/campaigns" },
        { label: "Select NFTS", to: "/campaigns/selectNFTs" },
        { label: "Targeting", to: "/campaigns/targeting" },
        { label: "Create Ads", to: "/campaigns/createAds" },
        { label: "Bidding", to: "/campaigns/bidding" },
        { label: "Review", to: "/campaigns/review" },
      ],
      to: "/campaigns",
    },
    {
      label: "Measurement",
      image: MeasurementIcon,
      menuModel: [
        {
          label: "Measurement",
          to: "/",
        },
      ],
      to: "/measurement",
    },
    {
      label: "NFTs",
      image: NFTsIcon,
      menuModel: [
        {
          label: "NFTs",
          to: "/",
        },
      ],
      to: "/nfts",
    },
  ];
  const [appMenuItem, setAppMenuItem] = useState<MenuModel[]>([]);
  const value: LayoutContextType = { navItem, appMenuItem, setAppMenuItem };
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

import { emptyNFTs } from "@/demo/data/nftCollection";
import TableContextType from "@/types/table";
import { ChildContainerProps, NFTType } from "@/types/types";
import { createContext, useState } from "react";

export const TableContext = createContext({} as TableContextType);

export const TableProvider = ({ children }: ChildContainerProps) => {
  const [dataTable, setDataTable] = useState<NFTType[]>(emptyNFTs);
  const [selectNFTs, setSelectNFTs] = useState<NFTType[]>([]);
  const value = { dataTable, setDataTable, selectNFTs, setSelectNFTs };
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

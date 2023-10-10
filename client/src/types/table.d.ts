import { Dispatch, SetStateAction } from "react";
import NFTType from "./nfts";

export default interface TableContextType {
  dataTable: NFTType[];
  setDataTable: Dispatch<SetStateAction<NFTType[]>>;
  selectNFTs: NFTType[];
  setSelectNFTs: Dispatch<SetStateAction<NFTType[]>>;
}

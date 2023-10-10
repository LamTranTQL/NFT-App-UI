import { NFTType } from "@/types/types";

export default interface TableProps {
  value: NFTType[];
  checkbox?: boolean | false;
  remove?: boolean | false;
  onValueChange?: (value: NFTType[]) => void;
}

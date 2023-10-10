import { NFTType } from "@/types/types";

let selectedNFTs = new Map();
let listeners: any[] = [];

const selectedNFTsStore = {
  addNFT(val: NFTType) {
    selectedNFTs.set(val.id, val);
    selectedNFTs = new Map(selectedNFTs);
    emitChange();
  },

  removeNFT(id: string) {
    selectedNFTs.delete(id);
    selectedNFTs = new Map(selectedNFTs);

    emitChange();
  },

  subscribe(listener: any) {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },

  getSnapshot() {
    return selectedNFTs;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export default selectedNFTsStore;

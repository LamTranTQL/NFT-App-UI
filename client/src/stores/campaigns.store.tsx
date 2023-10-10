import { DateType } from "@/types/types";

let campaignName: string = "";
let dailyBudget: number = 0;
let startDate: DateType = { yyyy: 0, mmmm: 0, dddd: 0 };
let endDate: DateType = { yyyy: 0, mmmm: 0, dddd: 0 };
let blockSites: string[] = [];
let categoryExclusion: string[] = [];
let listeners: any[] = [];

const campaignNameStore = {
  addName(val: string) {
    campaignName = val;
    emitChange();
  },

  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return campaignName;
  },
};

const dailyBudgetStore = {
  addDailyBudget(val: number) {
    dailyBudget = val;
  },
  removeDailyBudget() {
    dailyBudget = 0;
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return dailyBudget;
  },
};

const startDateStore = {
  getStartDate(val: DateType) {
    startDate = val;
  },
  removeStartDate() {
    startDate = { yyyy: 0, mmmm: 0, dddd: 0 };
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return startDate;
  },
};

const endDateStore = {
  getEndDate(val: DateType) {
    endDate = val;
  },
  removeEndDate() {
    endDate = { yyyy: 0, mmmm: 0, dddd: 0 };
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return endDate;
  },
};

const blockSitesStore = {
  addBlockSite(val: string) {
    blockSites = [...blockSites, val];
    emitChange();
  },
  removeBlockSite(i: number) {
    let _blockSites = [...blockSites];
    _blockSites.splice(i, 1);
    blockSites = [..._blockSites];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return blockSites;
  },
};

const categoryExclusionStore = {
  addCategoryExclusion(val: string) {
    categoryExclusion.push(val);
  },
  removeCategoryExclusion(i: number) {
    categoryExclusion.splice(i, 1);
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return categoryExclusion;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export {
  campaignNameStore,
  dailyBudgetStore,
  startDateStore,
  endDateStore,
  blockSitesStore,
  categoryExclusionStore,
};

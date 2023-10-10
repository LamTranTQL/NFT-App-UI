import { DescriptionsType, HeadlinesType } from "@/types/createAds";

let businessName: string = "";
let businessLogo: File | null = null;
let finalURL: string = "";
let headlines: HeadlinesType = {
  headline1: "",
  headline2: "",
  headline3: "",
  headline4: "",
  headline5: "",
};
let longHeadline: string = "";
let descriptions: DescriptionsType = {
  description1: "",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
};
let callToAction: string = "";
let listeners: any[] = [];

const businessNameStore = {
  addBusinessName(val: string) {
    businessName = val;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return businessName;
  },
};

const businessLogoStore = {
  addBusinessLogo(val: File) {
    businessLogo = val;
    emitChange();
  },
  removeBusinessLogo() {
    businessLogo = null;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return businessLogo;
  },
};

const finalURLStore = {
  addFinalURL(val: string) {
    finalURL = val;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return finalURL;
  },
};

const headlinesStore = {
  addHeadline(keyName: string, val: string) {
    let _headlines = { ...headlines };
    (_headlines as any)[keyName] = val;
    headlines = _headlines;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return headlines;
  },
};

const longHeadlineStore = {
  addLongHeadline(val: string) {
    longHeadline = val;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return longHeadline;
  },
};

const descriptionsStore = {
  addDescription(keyName: string, val: string) {
    let _descriptions = { ...descriptions };
    (_descriptions as any)[keyName] = val;
    descriptions = _descriptions;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return descriptions;
  },
};

const CTAStore = {
  addCTA(val: string) {
    callToAction = val;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return callToAction;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export {
  businessNameStore,
  businessLogoStore,
  finalURLStore,
  headlinesStore,
  longHeadlineStore,
  descriptionsStore,
  CTAStore,
};

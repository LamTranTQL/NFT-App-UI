let locations: string = "All countries and territories";
let demographics: string[] = [];
let keywords: string[] = [];
let topics: string[] = [];
let listeners: any[] = [];

const locationsStore = {
  getLocation(val: string) {
    locations = val;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return locations;
  },
};

const demographicsStore = {
  addDemographics(val: string) {
    demographics = [...demographics, val];
    emitChange();
  },
  removeDemographics(index: number) {
    let _demographics = [...demographics];
    _demographics.splice(index, 1);
    demographics = [..._demographics];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return demographics;
  },
};

const keywordsStore = {
  addKeyword(val: string) {
    keywords = [...keywords, val];
    emitChange();
  },
  removeKeyword(index: number) {
    let _keywords = [...keywords];
    _keywords.splice(index, 1);
    keywords = [..._keywords];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return keywords;
  },
};

const topicsStore = {
  addTopic(val: string) {
    topics = [...topics, val];
    emitChange();
  },
  removeTopic(index: number) {
    let _topics = [...topics];
    _topics.splice(index, 1);
    topics = [..._topics];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return topics;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export { locationsStore, demographicsStore, keywordsStore, topicsStore };

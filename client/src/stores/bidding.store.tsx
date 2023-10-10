let focusOn: string = "";
let targetCPA: number = 0;
let listeners: any[] = [];

const focusOnStore = {
  addFocusOn(val: string) {
    focusOn = val;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return focusOn;
  },
};

const targetCPAStore = {
  addTargetCPA(val: number) {
    targetCPA = val;
    emitChange();
  },

  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },

  getSnapshot() {
    return targetCPA;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export { focusOnStore, targetCPAStore };

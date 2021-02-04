import { observable, makeAutoObservable } from "mobx";
import UIStore from "../UIStore/UIStore";

class RootStore {
  public uiStore: UIStore;

  public value = 1;

  public someObject = {
    foo: 1,
    bar: "bar",
  };

  constructor() {
    makeAutoObservable(this, {
      someObject: observable.struct,
    });
    this.uiStore = new UIStore(this);
  }

  public get double() {
    return this.value * 2;
  }

  public increment() {
    this.someObject = {
      foo: this.someObject.foo * 2,
      bar: this.someObject.bar + this.someObject.bar,
    };
  }

  public reassign() {
    this.someObject = { ...this.someObject };
  }
}

export default RootStore;

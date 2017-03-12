interface IKoa {
  keys: any,
  context: any,

  use: (Function) => void,
  callback: () => void,
  toJSON: () => any,
  on: () => void
}

declare class Circe implements IKoa {
  keys: any;
  context: any;
  use: (Function: any) => void;
  callback: () => void;
  toJSON: () => any;
  on: () => void;

  static onError: (cb: (err: Error, ctx: any) => void) => Function
}

declare module "circe" {
  export default Circe
}

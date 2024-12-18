import type { ActionDispatch, AnyActionArg } from "react";

export type Reducer<S, A extends AnyActionArg> = (state: S, ...args: A) => S;
export type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<
  any,
  infer A extends AnyActionArg
>
  ? ActionDispatch<A>
  : never;

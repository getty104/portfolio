import { ActionType } from "../types/global";

export const reducer = <State>(): ((
  state: State,
  action: ActionType<State>
) => State) => (state: State, action: ActionType<State>) => action(state);

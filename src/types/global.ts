export type InteractorResult<Data> = Promise<{
  success: boolean;
  data?: Data;
  errors?: any;
}>;

export type ActionType<State> = (state: State) => State;
export type EffectType<
  ResultType extends void | (() => void)
> = () => ResultType;

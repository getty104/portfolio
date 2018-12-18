export type InteractorResult<Data> = Promise<{
  success: boolean;
  data?: Data;
  errors?: any;
}>;

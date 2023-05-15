export type Todo = {
  id: number;
  value: string;
  completed: boolean;
};

export enum Filters {
  ALL,
  ACTIVE,
  COMPLETED,
}

export type OperationType = 'include' | 'exact' | 'exclude' | 'or';

const include = (word: string): string => `+${word}`;

const exclude = (word: string): string => `-${word}`;

const exact = (word: string): string => `"${word}"`;

const or = (word: string): string => `"${word}"`;

const operate = {
  include,
  exclude,
  exact,
  or,
};

export const queryOperator = (operator: OperationType, value: string): string => (
  value ? operate[operator](value) : ''
);

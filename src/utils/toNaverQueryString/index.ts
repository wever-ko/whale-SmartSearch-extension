import NaverQueryParam from './NaverQueryParam';
import {queryOperator, OperationType} from "./queryOperator";

export default (param: NaverQueryParam): string => (
  Object.entries(param).reduce((accumulator, cur) => {
    const [key, value] = cur;
    return accumulator + (value ? queryOperator(key as OperationType, value) : '');
  }, '')
);

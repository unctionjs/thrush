import {MapperFunctionType} from "./types";

export default function thrush<A, B> (value: A) {
  return function thrushUnction (unction: MapperFunctionType<A, B>): B {
    return unction(value);
  };
}

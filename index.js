export default function thrush (value) {
  return function thrushUnction (unction) {
    return unction(value);
  };
}

type Combinable = number | string
type ConvertsionAlias = "as-number" | "as-text"

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConvertsionAlias
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   return resultConversion === "as number" ? parseFloat(result) : result.toString();
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedSringAges = combine("30", "26", "as-number");
console.log(combinedSringAges);

const combinedNames = combine("Juan", "Fernando", "as-text");
console.log(combinedNames);

export = {};

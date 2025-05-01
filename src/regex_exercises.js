const regexes = {
  canadianPostalCode: /^ ........ $/,
  visa: /^ ........ $/,
  masterCard: /^ ........ $/,
  notThreeEndingInOO: /^ ........ $/iu,
  divisibleBy16: /^ ........ $/,
  eightThroughThirtyTwo: /^ ........ $/,
  notPythonPycharmPyc: /^ ........ $/u,
  restrictedFloats: /^ ........ $/i,
  palindromes2358: /^ ........ $/,
  pythonStringLiterals: /^ ........ $/,
};

export function matches(name, string) {
  return regexes[name].test(string);
}

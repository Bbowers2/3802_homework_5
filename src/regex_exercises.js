const regexes = {
  canadianPostalCode:
    /^[A-CEG-HJ-NPR-TV-Z]\d[A-CEG-HJ-NPR-TV-Z] \d[A-CEG-HJ-NPR-TV-Z]\d$/,
  visa: /^4\d{12}(\d{3})?$/,
  masterCard:
    /^((5[1-5]\d{14})|(222[1-9]\d{12})|(22[3-9]\d{13})|(2[3-7]\d{14})|(27[01]\d{13})|(2720\d{12}))$/,
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

const regexes = {
  canadianPostalCode:
    /^[A-CEG-HJ-NPR-TV-Z]\d[A-CEG-HJ-NPR-TV-Z] \d[A-CEG-HJ-NPR-TV-Z]\d$/,
  visa: /^4\d{12}(\d{3})?$/,
  masterCard:
    /^((5[1-5]\d{14})|(222[1-9]\d{12})|(22[3-9]\d{13})|(2[3-7]\d{14})|(27[01]\d{13})|(2720\d{12}))$/,
  notThreeEndingInOO: /^([A-Za-z](?![oO][oO]$)[A-Za-z]*)?$/iu,
  divisibleBy16: /^(([01]*0000)|000|00|0)$/,
  eightThroughThirtyTwo: /^((8|9)|([12][0-9)])|(3[012]))$/,
  notPythonPycharmPyc: /^(?!python$)(?!pycharm$)(?!pyc$)\p{L}*$/u,
  restrictedFloats: /^\d*(.\d+)?[eE][+-]?\d{1,3}$/i,
  palindromes2358:
    /^((([abc])\3)|(([abc])[abc]\5)|(([abc])([abc])[abc]\8\7)|(([abc])([abc])([abc])([abc])\13\12\11\10))$/,
  pythonStringLiterals: /^ ........ $/,
};

export function matches(name, string) {
  return regexes[name].test(string);
}

export default function buildMatchFn(args: any, _arg2?: any) {
  // TODO@ts: Figure out what to do with _arg2
  return function(dirtyString: any, dirtyOptions: any) {
    var string = String(dirtyString)
    var options = dirtyOptions || {}
    var width = options.width

    var matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth]
    var matchResult = string.match(matchPattern)

    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0]

    var parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth]

    var value
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function(pattern: any) {
        return pattern.test(string)
      })
    } else {
      value = findKey(parsePatterns, function(pattern: any) {
        return pattern.test(string)
      })
    }

    value = args.valueCallback ? args.valueCallback(value) : value
    value = options.valueCallback ? options.valueCallback(value) : value

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function findKey(
  object: any,
  predicate: (arg: any) => boolean
): string | symbol | undefined {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key
    }
  }
}
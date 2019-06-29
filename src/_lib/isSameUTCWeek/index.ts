import startOfUTCWeek from '../startOfUTCWeek/index'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function isSameUTCWeek(dirtyDateLeft: Date | number, dirtyDateRight: Date | number, options: any) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 argument required, but only ' + arguments.length + ' present'
    )
  }

  var dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options)
  var dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}

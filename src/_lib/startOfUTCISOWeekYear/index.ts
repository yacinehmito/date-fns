import getUTCISOWeekYear from '../getUTCISOWeekYear/index'
import startOfUTCISOWeek from '../startOfUTCISOWeek/index'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCISOWeekYear(dirtyDate: Date | number) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var year = getUTCISOWeekYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(year, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  var date = startOfUTCISOWeek(fourthOfJanuary)
  return date
}
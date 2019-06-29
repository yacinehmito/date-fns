export interface Interval {
  start: Date | number
  end: Date | number
}
export interface Locale {
  formatDistance: Function
  formatRelative: Function
  localize: {
    ordinalNumber: Function
    era: Function
    quarter: Function
    month: Function
    day: Function
    dayPeriod: Function
  }
  formatLong: Record<string, any>
  date: Function
  time: Function
  dateTime: Function
  match: {
    ordinalNumber: Function
    era: Function
    quarter: Function
    month: Function
    day: Function
    dayPeriod: Function
  }
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
}
export interface CurriedFn1<A, R> {
  <A>(a: A): R
}
export interface CurriedFn2<A, B, R> {
  <A>(a: A): CurriedFn1<B, R>
  <A, B>(a: A, b: B): R
}
export interface CurriedFn3<A, B, C, R> {
  <A>(a: A): CurriedFn2<B, C, R>
  <A, B>(a: A, b: B): CurriedFn1<C, R>
  <A, B, C>(a: A, b: B, c: C): R
}
export interface CurriedFn4<A, B, C, D, R> {
  <A>(a: A): CurriedFn3<B, C, D, R>
  <A, B>(a: A, b: B): CurriedFn2<C, D, R>
  <A, B, C>(a: A, b: B, c: C): CurriedFn1<D, R>
  <A, B, C, D>(a: A, b: B, c: C, d: D): R
}
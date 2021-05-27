export interface Timeline<T> {
  get: (timing: number) => T,
  span: number,
}

export function concat2<T>(a: Timeline<T>, b: Timeline<T>): Timeline<T> {
  return {
    get: (timing: number) => timing < a.span ? a.get(timing) : b.get(timing - a.span),
    span: a.span + b.span,
  }
}

export function concat<T>(...as: Timeline<T>[]): Timeline<T> {
  return as.reduce(concat2)
}
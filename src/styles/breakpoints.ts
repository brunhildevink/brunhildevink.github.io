export const breakpointsNumerical = {
  xs: 639,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const xs = `(max-width: ${breakpointsNumerical.xs}px)`
const sm = `(min-width: ${breakpointsNumerical.sm}px)`
const md = `(min-width: ${breakpointsNumerical.md}px)`
const lg = `(min-width: ${breakpointsNumerical.lg}px)`
const xl = `(min-width: ${breakpointsNumerical.xl}px)`
const smMax = `(max-width: ${breakpointsNumerical.md - 1}px)`
const mdMax = `(max-width: ${breakpointsNumerical.lg - 1}px)`
const lgMax = `(max-width: ${breakpointsNumerical.xl - 1}px)`

const breakpoints = {
  xs,
  sm,
  md,
  lg,
  xl,
  smMax,
  mdMax,
  lgMax,
}

export default breakpoints

import responseType from './outputType'

export default interface TerminalOutput {
  callback?: () => any
  color?: string
  delay?: number
  text: string
  type?: responseType
}

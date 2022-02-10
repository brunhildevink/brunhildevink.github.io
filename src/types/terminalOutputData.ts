import responseType from './outputType'

export default interface TerminalOutput {
  color?: string
  delay?: number
  text: string
  type: responseType
}

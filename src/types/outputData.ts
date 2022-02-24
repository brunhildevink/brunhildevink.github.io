import OutputType from './outputType'

export default interface OutputData {
  callback?: () => any
  color?: string
  delay?: number
  text: string
  type?: OutputType
}

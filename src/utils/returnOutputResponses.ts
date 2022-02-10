import { colors } from '../styles'
import { TerminalOutput, OutputType } from '../types'

const returnOutputResponses = (input: string) => {
  let response: string

  if (input.toLowerCase() === 'about me') {
    response = "My name is Brunhilde. I'm a 27 year old developer from the Netherlands."
  } else if (input.toLowerCase() === 'social links') {
    response = 'github: brunhildevink, linkedIn: brunhilde vink'
  } else {
    response = 'command not found'
  }

  const data: TerminalOutput[] = [
    {
      color: colors.white,
      text: input,
      type: OutputType.INPUT,
    },
    {
      color: colors.menuYellow,
      delay: 500,
      text: response,
      type: OutputType.OUTPUT,
    },
  ]

  return data
}

export default returnOutputResponses

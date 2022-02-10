import { colors } from '../styles'
import { TerminalOutput, OutputType } from '../types'

const returnOutputResponses = (input: string) => {
  let response: string

  if (input.toLowerCase() === 'about me') {
    response = "My name is Brunhilde. I'm a 27 year old developer from the Netherlands."
  } else if (input.toLowerCase() === 'social links') {
    response =
      '<a target="_blank" href="https://github.com/brunhildevink">Github</a> <a target="_blank" href="https://linkedin.com/in/brunhilde-vink">linkedIn</a>'
  } else if (input.length === 0) {
    response = ''
  } else if (input.toLowerCase() === 'projects') {
    response = 'I will display some of my projects on here in the near future. Stay tuned!'
  } else if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
    response = 'hello! :)'
  } else {
    response = `command not found: ${input}`
  }

  const output: TerminalOutput[] = [
    {
      color: colors.white,
      text: input,
      type: OutputType.INPUT,
    },
    {
      color: colors.white,
      delay: 500,
      text: response,
      type: OutputType.OUTPUT,
    },
  ]

  return output
}

export default returnOutputResponses

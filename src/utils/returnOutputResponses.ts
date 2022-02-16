import { colors } from '../styles'
import { TerminalOutput, OutputType } from '../types'

const returnOutputResponses = (input: string) => {
  let response: string
  const inputLowerCase = input.toLowerCase()

  if (inputLowerCase === 'about me') {
    response = "My name is Brunhilde. I'm a 27 year old developer from the Netherlands."
  } else if (inputLowerCase === 'social links') {
    response =
      '<a target="_blank" href="https://github.com/brunhildevink">Github</a> <a target="_blank" href="https://linkedin.com/in/brunhilde-vink">linkedIn</a>'
  } else if (inputLowerCase.length === 0) {
    response = ''
  } else if (inputLowerCase === 'projects') {
    response = 'I will display some of my projects on here in the near future. Stay tuned!'
  } else if (inputLowerCase.includes('hello') || inputLowerCase.includes('hi')) {
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

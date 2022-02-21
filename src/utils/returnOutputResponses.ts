import { colors } from '../styles'
import { TerminalOutput, OutputType } from '../types'

const openResume = (): string => {
  const url = '/resume.pdf'
  const newWindow = window.open(url, 'main')

  if (newWindow == null) {
    return 'Failed to open resume, please try again!'
  } else {
    return 'Opening resume successful!'
  }
}

const returnOutputResponses = (input: string) => {
  const inputLowerCase = input.toLowerCase()

  const output: TerminalOutput[] = [
    {
      color: colors.white,
      text: input,
      type: OutputType.INPUT,
    },
  ]

  if (inputLowerCase === 'about me') {
    output.push({
      text: "My name is Brunhilde. I'm a 27 year old developer from the Netherlands.",
      type: OutputType.OUTPUT,
    })
  } else if (inputLowerCase === 'social links') {
    output.push({
      text: '<a target="_blank" href="https://github.com/brunhildevink">Github</a> <a target="_blank" href="https://linkedin.com/in/brunhilde-vink">linkedIn</a>',
      type: OutputType.OUTPUT,
    })
  } else if (inputLowerCase.length === 0) {
    output.push({
      text: '',
      type: OutputType.OUTPUT,
    })
  } else if (inputLowerCase === 'projects') {
    output.push({
      text: 'I will display some of my projects on here in the near future. Stay tuned!',
      type: OutputType.OUTPUT,
    })
  } else if (inputLowerCase === 'download resume') {
    const response = openResume()

    output.push({
      text: 'Downloading resume...',
      type: OutputType.OUTPUT,
    })

    output.push({
      color: colors.menuGreen,
      delay: 500,
      text: response,
      type: OutputType.OUTPUT,
    })
  } else if (inputLowerCase.includes('hello') || inputLowerCase.includes('hi')) {
    output.push({
      text: 'hello! :)',
      type: OutputType.OUTPUT,
    })
  } else {
    output.push({
      text: `command not found: ${input}`,
      type: OutputType.OUTPUT,
    })
  }

  return output
}

export default returnOutputResponses

import { colors } from '../styles'
import { CommandAnswers, CommandType as Command, OutputType, TerminalOutput } from '../types'
import resume from '../assets/documents/resume.pdf'

const openResume = () => {
  const newWindow = window.open(resume, 'main')

  if (newWindow === null) {
    return { color: colors.menuGreen, delay: 1000, text: CommandAnswers.DOWNLOAD_RESUME_ERROR }
  } else {
    return { color: colors.menuGreen, delay: 1000, text: CommandAnswers.DOWNLOAD_RESUME_SUCCESS }
  }
}

const returnOutputResponses = (input: string) => {
  const delay = 500
  const inputUppercase = input.split(' ').join('_').toUpperCase()
  const output: TerminalOutput[] = [
    {
      color: colors.white,
      text: input,
      type: OutputType.INPUT,
    },
  ]

  switch (inputUppercase) {
    case Command.ABOUT_ME:
      output.push({ delay, text: CommandAnswers.ABOUT_ME })
      break
    case Command.SOCIAL_LINKS:
      output.push({ delay, text: CommandAnswers.SOCIAL_LINKS })
      break
    case Command.DOWNLOAD_RESUME:
      const response = openResume()
      output.push({ delay, text: CommandAnswers.DOWNLOAD_RESUME })
      output.push(response)
      break
    default:
      output.push({ text: `command not found: ${input}` })
  }

  return output
}

export default returnOutputResponses

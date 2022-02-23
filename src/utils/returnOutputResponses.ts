import { CommandAnswers, CommandTypes as Command, OutputData } from '../types'
import resume from '../assets/documents/resume.pdf'
import { openFile } from '.'

const returnOutputResponses = (input: string) => {
  const delay = 500
  const INPUT = input.split(' ').join('_').toUpperCase()
  const output: OutputData[] = [{ text: input, type: 'USER' }]

  switch (INPUT) {
    case Command.ABOUT_ME:
      output.push({ delay, text: CommandAnswers.ABOUT_ME })
      break
    case Command.SOCIAL_LINKS:
      output.push({ delay, text: CommandAnswers.SOCIAL_LINKS })
      break
    case Command.DOWNLOAD_RESUME:
      const response = openFile(resume)
      output.push({ delay, text: CommandAnswers.DOWNLOAD_RESUME })
      output.push(response)
      break
    default:
      output.push({ text: `command not found: ${input}` })
  }

  return output
}

export default returnOutputResponses

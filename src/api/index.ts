import { TerminalOutput, OutputType } from '../types'
import { colors } from '../styles'

const terminalOutputData: TerminalOutput[] = [
  {
    color: colors.menuRed,
    delay: 100,
    text: 'Busy compiling...',
    type: OutputType.OUTPUT,
  },
  {
    color: colors.menuGreen,
    delay: 1000,
    text: 'Compiled successfully!',
    type: OutputType.OUTPUT,
  },
  {
    color: colors.menuYellow,
    delay: 2000,
    text: 'Start navigating the website by typing the following commands:',
    type: OutputType.OUTPUT,
  },
  {
    color: colors.menuYellow,
    delay: 2000,
    text: '[About me, Projects, Social links]',
    type: OutputType.OUTPUT,
  },
]

export default terminalOutputData

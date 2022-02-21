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
    color: colors.white,
    delay: 2000,
    text: 'You can now start navigating the website by typing the following commands:',
    type: OutputType.OUTPUT,
  },
  {
    color: colors.menuYellow,
    delay: 2000,
    text: '[About me], [Social links], [Download resume]',
    type: OutputType.OUTPUT,
  },
]

export default terminalOutputData

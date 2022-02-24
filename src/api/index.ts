import { OutputData } from '../types'
import { colors } from '../styles'

const terminalOutputData: OutputData[] = [
  {
    color: colors.menuRed,
    delay: 100,
    text: 'Busy compiling...',
    type: 'SYSTEM',
  },
  {
    color: colors.menuGreen,
    delay: 1000,
    text: 'Compiled successfully!',
    type: 'SYSTEM',
  },
  {
    color: colors.white,
    delay: 2000,
    text: 'You can now start navigating the website by typing the following commands:',
    type: 'SYSTEM',
  },
  {
    color: colors.menuYellow,
    delay: 2000,
    text: '[About me], [Social links], [Download resume]',
    type: 'SYSTEM',
  },
]

export default terminalOutputData

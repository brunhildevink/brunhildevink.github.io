import { responseData, responseType } from '../types'
import { colors } from '../styles'

const responseDataApi: responseData[] = [
  {
    color: colors.menuRed,
    delay: 100,
    text: 'Busy compiling...',
    type: responseType.OUTPUT,
  },
  {
    color: colors.menuGreen,
    delay: 1000,
    text: 'Compiled successfully!',
    type: responseType.OUTPUT,
  },
  {
    color: colors.menuYellow,
    delay: 2000,
    text: 'Start navigating the website by typing the following commands:',
    type: responseType.OUTPUT,
  },
  {
    color: colors.menuYellow,
    delay: 2000,
    text: '[About me, Projects, Social links]',
    type: responseType.OUTPUT,
  },
]

export default responseDataApi

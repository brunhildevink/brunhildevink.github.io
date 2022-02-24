import { colors } from '../styles'
import { CommandAnswers } from '../types'

const openFile = (filePath: string) => {
  const newWindow = window.open(filePath, 'main')

  if (newWindow === null) {
    return { color: colors.menuGreen, delay: 1000, text: CommandAnswers.DOWNLOAD_ERROR }
  } else {
    return { color: colors.menuGreen, delay: 1000, text: CommandAnswers.DOWNLOAD_SUCCESS }
  }
}

export default openFile

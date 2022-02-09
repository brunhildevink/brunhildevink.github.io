import { colors } from '../styles'
import { responseData, responseType } from '../types'

const returnResponseData = (input: string) => {
  let response: string

  if (input.toLowerCase() === 'about me') {
    response = "My name is Brunhilde. I'm a 27 year old developer from the Netherlands."
  } else if (input.toLowerCase() === 'social links') {
    response = 'github: brunhildevink, linkedIn: brunhilde vink'
  } else {
    response = 'command not found'
  }

  const data: responseData = {
    color: colors.menuYellow,
    delay: 500,
    text: response,
    type: responseType.RESPONSE,
  }

  return data
}

export default returnResponseData

import { colors } from '../styles'
import { TerminalOutput, OutputType } from '../types'
import githubIcon from '../assets/images/github.svg'
import linkedinIcon from '../assets/images/linkedin.svg'
import resume from '../assets/documents/resume.pdf'

const openResume = () => {
  const newWindow = window.open(resume, 'main')

  if (newWindow == null) {
    return 'Failed to open resume, please try again!'
  } else {
    return 'Opening resume successful!'
  }
}

const returnOutputResponses = (input: string) => {
  const inputLowerCase = input.toLowerCase()
  const anchorTagStyle = `display: grid; grid-template-columns: 20px 40px; align-items: center; margin-bottom: 8px;`
  const output: TerminalOutput[] = [
    {
      color: colors.white,
      text: input,
      type: OutputType.INPUT,
    },
  ]

  switch (inputLowerCase) {
    case 'about me':
      output.push({ delay: 500, text: "My name is Brunhilde. I'm a 27 year old developer from the Netherlands." })
      break
    case 'social links':
      output.push({
        delay: 500,
        text: `<a style="${anchorTagStyle}" target="_blank" href="https://github.com/brunhildevink"><img src=${githubIcon} />Github</a> <a style="${anchorTagStyle}" target="_blank" href="https://linkedin.com/in/brunhilde-vink"><img src=${linkedinIcon} />LinkedIn</a>`,
      })
      break
    case 'projects':
      output.push({ delay: 500, text: 'I will showcase some of my projects on here in the near future. Stay tuned!' })
      break
    case 'download resume':
      output.push({ delay: 500, text: 'Opening resume...' })

      const response = openResume()

      output.push({
        color: colors.menuGreen,
        delay: 1000,
        text: response,
      })
      break
    default:
      output.push({ text: `command not found: ${input}` })
  }

  return output
}

export default returnOutputResponses

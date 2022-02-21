import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

const anchorTagStyle = `display: grid; grid-template-columns: 20px 40px; align-items: center; margin-bottom: 8px;`

const CommandAnswers = {
  ABOUT_ME: "My name is Brunhilde. I'm a 27 year old developer from the Netherlands.",
  DOWNLOAD_RESUME: 'Opening resume...',
  DOWNLOAD_RESUME_ERROR: 'Failed to open resume, please try again!',
  DOWNLOAD_RESUME_SUCCESS: 'Opening resume successful!',
  PROJECTS: 'I will showcase some of my projects on here in the near future. Stay tuned!',
  SOCIAL_LINKS: `<a style="${anchorTagStyle}" target="_blank" href="https://github.com/brunhildevink"><img src=${github} />Github</a> <a style="${anchorTagStyle}" target="_blank" href="https://linkedin.com/in/brunhilde-vink"><img src=${linkedin} />LinkedIn</a>`,
}

export default CommandAnswers

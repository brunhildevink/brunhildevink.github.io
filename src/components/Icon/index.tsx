import React from 'react'

export interface SvgProps {
  ariaHidden?: 'true' | 'false'
  display?: string
  fill?: string
  height?: number
  title?: string
  width?: number
}

export interface Props extends SvgProps {
  children: JSX.Element
  viewBox: string
}

const Icon: React.FC<Props> = ({
  ariaHidden = 'true',
  children,
  display,
  fill,
  height = 20,
  title,
  viewBox,
  width = 20,
}) => {
  const style = {
    display: display || 'inline-block',
    fill: fill || 'currentColor',
    height,
    lineHeight: 1,
    verticalAlign: 'middle',
    width,
  }

  return (
    <svg aria-hidden={ariaHidden} xmlns="http://www.w3.org/2000/svg" style={style} viewBox={viewBox}>
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}

const Expand: React.FC<SvgProps> = ({ display, fill, height, title = 'Warning', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 16 14" width={width}>
    <path fill={fill} d="M4.5 0H1a1 1 0 0 0-1 1v3.5L4.5 0ZM1 6h3.5a1 1 0 0 0 1-1V1.5L1 6Z" />
  </Icon>
)

const Icons = {
  Expand,
}

export default Icons

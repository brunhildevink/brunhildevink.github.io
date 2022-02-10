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

const Expand: React.FC<SvgProps> = ({ display, fill, height, title = 'Expand', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 16 14" width={width}>
    <path fill={fill} d="M4.5 0H1a1 1 0 0 0-1 1v3.5L4.5 0ZM1 6h3.5a1 1 0 0 0 1-1V1.5L1 6Z" />
  </Icon>
)

const ExternalUrl: React.FC<SvgProps> = ({ display, fill, height, title = 'External Url', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 512 512" width={width}>
    <path
      fill={fill}
      d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32H64c-35.35 0-64 28.65-64 64v288c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96c0-17.7-14.3-32-32-32zM502.6 9.367C496.8 3.578 488.8 0 480 0H320c-17.67 0-31.1 14.32-31.1 31.1 0 17.67 14.32 31.1 31.99 31.1h82.75L178.7 290.7c-12.5 12.5-12.5 32.76 0 45.26 12.5 12.54 32.8 12.54 45.3.04l224-226.8V192c0 17.67 14.33 31.1 31.1 31.1S512 209.7 512 192V31.1c0-7.94-3.6-15.94-9.4-21.733z"
    />
  </Icon>
)

const Icons = {
  Expand,
  ExternalUrl,
}

export default Icons

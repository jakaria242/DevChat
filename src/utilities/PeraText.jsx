import React from 'react'
import { Link } from 'react-router-dom'

const PeraText = ({className, text}) => {
  return (
    <p className={className}>{text}</p>
  )
}

export default PeraText
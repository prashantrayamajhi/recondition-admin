import React from 'react'
import './Container.scss'

interface ContainerProps {
    children : React.ReactNode
}

export default function Container(containerObj : ContainerProps) {
  return (
    <div className="container">
      { containerObj.children }
    </div>
  )
}

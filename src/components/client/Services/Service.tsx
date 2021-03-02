import React from 'react'

interface ServiceProps{
    icon : React.ReactNode,
    title : string,
    description: string
}

export default function Service(service: ServiceProps) {
  return (
    <div className='card'>
      {service.icon}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}

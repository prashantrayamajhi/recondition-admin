interface ServiceInterface{
    icon : any,
    title : string,
    description: string
}
export default function Service(service: ServiceInterface) {
  return (
    <div className='card'>
      {service.icon}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}

import './index.scss'

interface container {
    children : React.ReactNode
}

export default function Container(containerObj : container) {
  return (
    <div className="container">
      { containerObj.children }
    </div>
  )
}

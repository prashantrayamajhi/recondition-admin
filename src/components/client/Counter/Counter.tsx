import './Counter.scss'
import CountUp from 'react-countup'

export default function Counter() {
  return (
    <div className='counter-wrapper'>
      <div className='counter-item'>
        <h3>Cars Sold</h3>
        <CountUp className='counter-number' end={120} />
      </div>
      <div className='counter-item'>
        <h3>Cars Washed</h3>
        <CountUp className='counter-number' end={500} />
      </div>
      <div className='counter-item'>
        <h3>Reconditioned</h3>
        <CountUp className='counter-number' end={480} />
      </div>
    </div>
  )
}

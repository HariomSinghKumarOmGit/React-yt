/*
import { Bookmark } from 'lucide-react'

export const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={data.brandLogo} alt={data.companyName} />
        <button>Save <Bookmark size={12} /></button>
      </div>
      <div className="centre">
        <h3>{data.companyName} <span>{data.datePosted}</span></h3>
        <h2>{data.post}</h2>
        <div className="tag">
          <h4>{data.tag1}</h4>
          <h4>{data.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h1>{data.pay}</h1>
          <p>{data.location}</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}
*/





import {Bookmark} from 'lucide-react'

export const Card = (props) => {

    console.log(props.company)

  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://i.pinimg.com/1200x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg" alt="" />
          <button>Save<Bookmark size={12}/></button>
        </div>
        <div className="centre">
          <h3> {props.company} <span> 5 days ago</span></h3>
          <h2>Seniour UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h1>$120/h</h1>
            <p>Mumbai, India</p>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

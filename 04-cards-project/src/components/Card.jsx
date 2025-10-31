
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



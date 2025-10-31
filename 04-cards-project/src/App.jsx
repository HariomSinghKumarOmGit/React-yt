import React from 'react'
import { Card } from './components/Card'


const jobOpeningsNewWorceData = [
  {
    key: 1,
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    key: 2,
    brandLogo: "https://pngimg.com/uploads/google/google_PNG21.png",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Mountain View, USA"
  },
  {
    key: 3,
    brandLogo: "https://pngimg.com/uploads/amazon/amazon_PNG11.png",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "Staff Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Seattle, USA"
  },
  {
    key: 4,
    brandLogo: "https://pngimg.com/uploads/apple_logo/apple_logo_PNG25.png",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hour",
    location: "Cupertino, USA"
  },
  {
    key: 5,
    brandLogo: "https://pngimg.com/uploads/microsoft/microsoft_PNG30.png",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    post: "Lead Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Redmond, USA"
  },
  {
    key: 6,
    brandLogo: "https://pngimg.com/uploads/netflix/netflix_PNG23.png",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Los Gatos, USA"
  },
  {
    key: 7,
    brandLogo: "https://pngimg.com/uploads/uber/uber_PNG9.png",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "Junior Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "San Francisco, USA"
  },
  {
    key: 8,
    brandLogo: "https://pngimg.com/uploads/airbnb/airbnb_PNG15.png",
    companyName: "Airbnb",
    datePosted: "3 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "San Francisco, USA"
  },
  {
    key: 9,
    brandLogo: "https://pngimg.com/uploads/tesla/tesla_PNG18.png",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Austin, USA"
  },
  {
    key: 10,
    brandLogo: "https://pngimg.com/uploads/salesforce/salesforce_PNG1.png",
    companyName: "Salesforce",
    datePosted: "4 days ago",
    post: "Staff Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$92/hour",
    location: "San Francisco, USA"
  },
  {
    key: 11,
    brandLogo: "https://pngimg.com/uploads/intel/intel_PNG16.png",
    companyName: "Intel",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hour",
    location: "Santa Clara, USA"
  },
  {
    key: 12,
    brandLogo: "https://pngimg.com/uploads/ibm/ibm_PNG8.png",
    companyName: "IBM",
    datePosted: "1 day ago",
    post: "Mid Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hour",
    location: "Armonk, USA"
  },
  {
    key: 13,
    brandLogo: "https://pngimg.com/uploads/oracle/oracle_PNG1.png",
    companyName: "Oracle",
    datePosted: "3 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Austin, USA"
  },
  {
    key: 14,
    brandLogo: "https://pngimg.com/uploads/adobe/adobe_PNG1.png",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$82/hour",
    location: "San Jose, USA"
  },
  {
    key: 15,
    brandLogo: "https://pngimg.com/uploads/cisco/cisco_PNG10.png",
    companyName: "Cisco",
    datePosted: "6 days ago",
    post: "Lead Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$96/hour",
    location: "San Jose, USA"
  },
  {
    key: 16,
    brandLogo: "https://pngimg.com/uploads/spotify/spotify_PNG23.png",
    companyName: "Spotify",
    datePosted: "4 days ago",
    post: "Junior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$62/hour",
    location: "Stockholm, Sweden"
  },
  {
    key: 17,
    brandLogo: "https://pngimg.com/uploads/paypal/paypal_PNG19.png",
    companyName: "PayPal",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$76/hour",
    location: "San Jose, USA"
  },
  {
    key: 18,
    brandLogo: "https://pngimg.com/uploads/dropbox/dropbox_PNG18.png",
    companyName: "Dropbox",
    datePosted: "3 days ago",
    post: "Staff Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$98/hour",
    location: "San Francisco, USA"
  },
  {
    key: 19,
    brandLogo: "https://pngimg.com/uploads/slack/slack_PNG16.png",
    companyName: "Slack",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$66/hour",
    location: "San Francisco, USA"
  },
  {
    key: 20,
    brandLogo: "https://pngimg.com/uploads/atlassian/atlassian_PNG1.png",
    companyName: "Atlassian",
    datePosted: "5 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$84/hour",
    location: "Sydney, Australia"
  },
  {
    key: 21,
    brandLogo: "https://pngimg.com/uploads/zoom/zoom_PNG8.png",
    companyName: "Zoom",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$91/hour",
    location: "San Jose, USA"
  },
  {
    key: 22,
    brandLogo: "https://pngimg.com/uploads/shopify/shopify_PNG1.png",
    companyName: "Shopify",
    datePosted: "4 days ago",
    post: "Mid Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$77/hour",
    location: "Ottawa, Canada"
  },
  {
    key: 23,
    brandLogo: "https://pngimg.com/uploads/twitter/twitter_PNG15.png",
    companyName: "X (Twitter)",
    datePosted: "3 days ago",
    post: "Lead Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$94/hour",
    location: "San Francisco, USA"
  },
  {
    key: 24,
    brandLogo: "https://pngimg.com/uploads/linkedin/linkedin_PNG4.png",
    companyName: "LinkedIn",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$64/hour",
    location: "Sunnyvale, USA"
  },
  {
    key: 25,
    brandLogo: "https://pngimg.com/uploads/reddit/reddit_PNG12.png",
    companyName: "Reddit",
    datePosted: "6 days ago",
    post: "Senior Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$81/hour",
    location: "San Francisco, USA"
  },
  {
    key: 26,
    brandLogo: "https://pngimg.com/uploads/uber/uber_PNG9.png",
    companyName: "Stripe",
    datePosted: "1 day ago",
    post: "Staff Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$99/hour",
    location: "San Francisco, USA"
  },
  {
    key: 27,
    brandLogo: "https://pngimg.com/uploads/snapchat/snapchat_PNG21.png",
    companyName: "Snap Inc.",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$67/hour",
    location: "Santa Monica, USA"
  },
  {
    key: 28,
    brandLogo: "https://pngimg.com/uploads/pinterest/pinterest_PNG21.png",
    companyName: "Pinterest",
    datePosted: "4 days ago",
    post: "Mid Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$79/hour",
    location: "San Francisco, USA"
  },
  {
    key: 29,
    brandLogo: "https://pngimg.com/uploads/lyft/lyft_PNG1.png",
    companyName: "Lyft",
    datePosted: "2 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$89/hour",
    location: "San Francisco, USA"
  },
  {
    key: 30,
    brandLogo: "https://pngimg.com/uploads/doorDash/doordash_PNG1.png",
    companyName: "DoorDash",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$83/hour",
    location: "San Francisco, USA"
  }
]


  const jobOpenings = [
    { key: 1,
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      key: 2,
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      key: 3,
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      key: 4,
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      key: 5,
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      key: 6,
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      key: 7,
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      key: 8,
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      key: 9,
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      key: 10,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

const App = () => {
  return (
      <div className="parent">
       {jobOpenings.map((elem) => (
        <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
      ))}
    </div>
  )
}

export default App

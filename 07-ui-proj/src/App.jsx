import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'


const App = () => {
  const users =[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988',
      intro:'',
      color: 'royalblue',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
      intro:'',
      color: 'royalred',
      tag:'UnderBanked'
    },
    {
      img:'https://images.unsplash.com/photo-1661747675166-5cf96bd5d0dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
      intro:'',
      color:'lightgreen',
      tag:'UnderServed'
    },
    {
    img: 'https://images.unsplash.com/photo-1752778935903-e13e544efc3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1001',
    intro: 'A calm portrait capturing quiet confidence in soft natural light.',
    tag:  'minimal',
    color:'pink ',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
    intro: 'Elegant studio shot with refined tones and strong subject focus.',
    tag:  'elegant' ,
    color:'purple ',
  },
  {
    img: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
    intro: 'Urban-inspired style blending creativity with modern lighting.',
    tag:  'creative' ,
    color:'pink ',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661378470712-98550fb28d15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2832',
    intro: 'A cinematic aesthetic shot with dramatic lighting and contrast.',
    tag: 'cinematic' ,
    color:'indigo ',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661660084694-68f8eadf15e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340',
    intro: 'A moody editorial capture emphasizing texture and tone.',
    tag:  'moody' ,
    color:'orange ',
  },
  {
    img: 'https://images.unsplash.com/photo-1724627560403-a007720de591?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=927',
    intro: 'A minimalist composition focused on balance and serenity.',
    tag:   'composition',
    color:'teal ', 
  },
  {
  img: 'https://images.unsplash.com/photo-1719845202038-d57a8b79b83f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
  intro: 'A vibrant scene bursting with energetic colour and motion.',
  tag: 'vibrant',
  color:'gray ',
},
{
  img: 'https://images.unsplash.com/photo-1728091831768-dab747648262?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&q=80&w=2340',
  intro: 'Soft ambient light over minimalist form, evoking calm focus.',
  tag: 'minimalist',
  color:'aqua ',
}
  ]


  return (
    <div>
      <Section1 users ={users} />
      <Section2/>
    </div>
  )
}

export default App

import { useState } from "react"

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title, details})

    setTask(copyTask)
    

    console.log(title)
    console.log(details)
    setDetails('');
    setTitle('');
  }

  const deleteNotes= (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  }



  return (
    <div className="h-screen  bg-black text-white lg:flex ">
      <form action="" onSubmit={(e) => {
        submitHandler(e)
        }} 
        className="items-start flex gap-4 lg:w-1/2 flex-col p-10  ">

        <h1  className="text-4xl font-bold  "> Add Notes</h1>
      
        {/* First Input for heading */}
        <input 
          type="text" 
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded flex "
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        {/* Description of title  */}
        <textarea
          type="text" 
          className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded "
          placeholder="Write Details here "
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
        />
        <button 
          className="bg-white active:bg-gray-400 active:scale-100 font-medium w-full text-black outline-none px-5 py-2 rounded flex "
          >Add Notes</button>
   
        { <div> 
          {/* <img  className=" h-52 " src="https://www.pngall.com/wp-content/uploads/5/Sticky-Notes-PNG-Clipart.png" alt="" /> */}
          {/* <img src="https://pngimg.com/d/sticky_note_PNG18899.png" alt="" /> */}
          {/* // this is also one of good <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEs0lJbGMzAMZnsvIG5GvwcCQSwINFIT4IjYsLXq0BOjS5pR3b3NLhAeVEDceOrhvIB4&usqp=CAU" alt="" /> */}
          {/* <img src="https://pngimg.com/d/sticky_note_PNG18932.png" alt="" /> */}
          {/* // this can be one   <img src="https://cdn.pixabay.com/photo/2016/10/23/15/47/paper-1763262_960_720.png" alt="" /> */}
        </div> }
        
      </form>
      <div className="p-10  lg:w-1/2 bg-gray-950 lg:border-l ">
        <h1  className="text-4xl font-bold  "> Your Notes</h1>
        <div className="gap-5  flex flex-wrap items-start justify-start mt-5  h-[90%] overflow-auto  ">
         
        {task.map((elem, idx)=>{
          return <div key={idx} className="flex  justify-between flex-col relative bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/10/23/15/47/paper-1763262_960_720.png')] h-52 w-40  text-black p-4 rounded-2xl">
                <div>
                <h3 className="leading-tight text-lg font-bold" >{elem.title}</h3>
                <p className=" leading-tight mt-1 text-sm text-gray-800 overflow-x-hidden overflow-y-auto h-[80%]">{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNotes(idx)
              }   } className="w-full bg-teal-500 text-xs text-gray-800 py-1 rounded-2xl">Delete Notes</button>
          </div>
        })}
          
        </div>
      </div>
      
    </div>
  )
}

export default App

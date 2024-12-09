import { useState } from "react"
const App2 = () => {
  const [showbtn,setshowbtn]=useState(false)
  return (
    <>
    {showbtn?<button>Showbtn is true</button>:<button>showbtn is false</button>}

    {/* {showbtn && <button>showbtn is true</button>} */}
    <div>
      <button onClick={()=>setshowbtn(!showbtn)}>Toogle showbtn</button>
      
    </div>
    </>
    
  )
}

export default App2

import { useState } from 'react'
import ColorButton from './components/ColorButtons'
function App() {
  const [color, setColor] = useState('yellow')
  const colors = ['red','brown','indigo','teal','pink','orange','purple','green','blue']
 return(
  <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
       <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
  {colors.map((color) => 
  <ColorButton color={color} setColor={setColor}/>
   )}
      </div>
        </div>
           </div>

  
 )

}

export default App

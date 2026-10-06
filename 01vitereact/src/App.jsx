import { useState } from 'react'
import ColorButton from './components/ColorButtons'
function App() {
  const [color, setColor] = useState('yellow')
  const colors = ['red','brown','indigo','teal','pink','orange','purple','green','blue']
  const randomColor = function(){
    const index=  Math.floor(Math.random()*colors.length)
    setColor(colors[index])
  }
 return(
  <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
       <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <h2 className='bg-gray-100 rounded-full px-4 py-2'>Current color: {color}</h2>
    <button onClick={randomColor} className='bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-2'>
       Random Color
    </button>
  {colors.map((color) => 
  <ColorButton key={color} color={color} setColor={setColor}/>
  
   )}
      
      </div>
        </div>
           </div>

           
           </>


  
 )

}

export default App

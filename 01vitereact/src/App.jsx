import { useState } from 'react'
import ColorButton from './components/ColorButtons'
function App() {
  const [color, setColor] = useState('yellow')
 return(
  <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
       <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
  <ColorButton color={'red'} setColor={setColor}/>
  <ColorButton color={'brown'} setColor={setColor}/>
  <ColorButton color={'indigo'} setColor={setColor}/>
  <ColorButton color={'teal'} setColor={setColor}/>
  <ColorButton color={'pink'} setColor={setColor}/>
  <ColorButton color={'orange'} setColor={setColor}/>
  <ColorButton color={'purple'} setColor={setColor}/>
  <ColorButton color={'green'} setColor={setColor}/>
  <ColorButton color={'blue'} setColor={setColor}/>
      </div>
        </div>
           </div>

  
 )

}

export default App

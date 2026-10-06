function ColorButton({color,setColor}){
    return(
       <button className='outline-none px-4 py-1 rounted-full text-white shadow-lg'
        onClick={() => setColor(color)}
        style={{backgroundColor:color}}
         >
        {color}
      </button>    
    )
}

export default ColorButton
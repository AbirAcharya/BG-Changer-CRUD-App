import { useState } from 'react'

import heroImg from './assets/hero.png'

import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  console.log(color)
  const changeColor = (color) => {
    console.log("Clicked:", color)
    setcolor(color)
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center duration-200 text-6xl text-white' style={{ backgroundColor: color, height: "100vh" }}>This is a {color} background
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
          <button
            className="outline-none px-5 py-2 rounded-full text-white font-medium text-sm shadow-sm bg-red-600 hover:bg-red-700 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => changeColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-5 py-2 rounded-full text-white font-medium text-sm shadow-sm bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => changeColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-5 py-2 rounded-full text-white font-medium text-sm shadow-sm bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => changeColor('blue')}
          >
            Blue
          </button>
          <button
            className="outline-none px-5 py-2 rounded-full text-white font-medium text-sm shadow-sm bg-orange-600 hover:bg-orange-700 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => changeColor('orange')}
          >
            Orange
          </button>
          <button
            className="outline-none px-5 py-2 rounded-full text-white font-medium text-sm shadow-sm bg-pink-600 hover:bg-pink-700 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => changeColor('pink')}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
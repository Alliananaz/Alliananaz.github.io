import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    // <h1 className="text-9xl font-bold underline text-red-500">
    //   Period💅
    // </h1>
    // <div className="flex flex-col w-full h-full">
    //     <div className="flex flex-row">
    //         <div className="flex-1 flex border justify-center items-center">A</div>
    //         <div className="flex-1 flex border justify-center items-center">B</div>
    //         <div className="flex-1 flex border justify-center items-center">C</div>
    //     </div>
    //     <div className="flex border justify-center items-center">D</div>
    // </div>
    <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
  )
}
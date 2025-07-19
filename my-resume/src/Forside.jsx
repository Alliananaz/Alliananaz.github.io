export default function Forside(){
    return (
        <>
        <div className='relative p-10 bg-neutral-200 h-auto rounded-xl shadow-lg'>
            <div className="p-8 flex justify-center">
                {/* Camera component */}
                <div className="w-5 h-5 bg-stone-900 rounded-full flex items-center justify-center text-white font-bold">
                    <div className="w-3 h-3 bg-zinc-500 rounded-full flex items-center justify-center text-white font-bold">
                        <div className="w-2 h-2 bg-stone-800 rounded-full flex items-center justify-center text-white font-bold"></div>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-10 gap-4 flex items-center-safe ">
                {/* <div className="col-span-1 bg-neutral-300 h-80 rounded-xl"></div> */}
                <div className="col-span-8 col-start-2 p-10 bg-neutral-50 h-auto border-4">
                    <div className="mt-10">
                        <p className="mb-12 text-3xl text-center">Heyy and welcome to my website:p</p>
                        <p className="text-xl text-center font-semibold">Please select a filter</p>
                        <div className="p-5">
                            <ul className="list-none text-center text-xl/10">
                                <li className="">
                                    Projects
                                </li>
                                <li className="">
                                    Resume
                                </li>
                                <li className="">
                                    LinkedIn
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-1 bg-neutral-300 h-80 rounded-xl"></div> */}
            </div>
            
            <div className="p-15 flex justify-center">
                <div className="relative bg-black w-70 h-30 rounded-sm flex items-center">
                    <div className="absolute bottom-[-1px] left-0 w-full h-5 bg-gray-700 rounded-b-md"
                        style={{
                            clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
                        }}>
                    </div>
                </div>
            </div> 
            
            <div className="flex items-end bg-red-200">
                <p className="">Made by Alliana:p</p>
            </div>               
        </div>
        
        </>
    )
}
export default function Forside(){
    return (
        <>
        <div className='relative p-10 bg-neutral-200 h-250 rounded-xl shadow-lg'>
            <div>
                {/* Camera component */}
            </div>
            <div className="bg-red-400 grid grid-cols-8 gap-4 flex items-center-safe ">
                <div className="col-span-1 bg-neutral-300 h-80 rounded-xl"></div>
                <div className="col-span-6 col-start-2 p-10 bg-neutral-50 h-130 border-4">
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
                <div className="col-span-1 bg-neutral-300 h-80 rounded-xl"></div>
            </div>
            
            <div className="bg-red-300 p-15 justify-items-center">
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
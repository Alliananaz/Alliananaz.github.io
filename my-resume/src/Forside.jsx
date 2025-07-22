export default function Forside(){
    return (
        <>
        <div className='relative p-10 bg-neutral-200 h-auto rounded-xl shadow-lg'>
            <CameraComponent/>
            
            <div className="gap-4 flex justify-center">
                <div className="p-4 grid grid-cols-10 gap-4 bg-neutral-50 border-4 h-[430px] w-[650px] overflow-auto">
                    <div className="col-span-5 bg-red-300">
                        <p className="mt-8 ms-8 text-2xl">Projects</p>
                        <div className="mt-5 ms-8 bg-red-400 sm:h-65 sm:w-65 flex justify-center rounded-md">
                            Bilde    
                        </div>
                        <p className="ms-6 p-2">Project name</p>
                    </div>
                    <div className="col-span-5 col-start-6 p-4 bg-red-300">
                        <p className="mt-8 text-lg font-semibold text-center">
                            Please select a project
                        </p>
                        <div className="p-6 grid grid-cols-2 justify-items-center gap-2 overflow-auto">
                            <div className="h-25 w-25 bg-red-200 rounded-md">01</div>
                            <div className="h-25 w-25 bg-red-200 rounded-md">02</div>
                            <div className="h-25 w-25 bg-red-200 rounded-md">03</div>
                            <div className="h-25 w-25 bg-red-200 rounded-md">04</div>
                        </div>
                        <div className=''>
                            <button className="text-lg px-4 py-2 bg-yellow-200 hover:bg-yellow-300 border-black rounded-md">
                                Read more
                            </button>
                        </div>
                    </div>
                    
                </div>
                {/* <Intro/> */}
            </div>
            
            <PhotoBox/> 
            
            {/* <div className="flex items-end bg-red-200">
                <p className="">Made by Alliana:p</p>
            </div> 
            */}
        </div>
        </>
    )
}

function CameraComponent(){
    return(
        
        <div className="p-8 flex justify-center">
            <div className="w-5 h-5 bg-stone-900 rounded-full flex items-center justify-center text-white font-bold">
                <div className="w-3 h-3 bg-zinc-500 rounded-full flex items-center justify-center text-white font-bold">
                    <div className="w-2 h-2 bg-stone-800 rounded-full flex items-center justify-center text-white font-bold"></div>
                </div>
            </div>
        </div>
    );
}

function Intro(){
    return(
        <div className="p-10 gap-4 bg-neutral-50 border-4 h-[400px] w-[600px] overflow-auto">
            <div className="mt-6">
                <p className="mb-12 text-3xl text-center">Heyy and welcome to my website:p</p>
                <p className="text-xl text-center font-semibold">Please select a filter</p>
                <div className="p-5">
                    <ul className="list-none text-center text-xl/10">
                        <li className="">
                            <a href="" class="text-neutral-600 hover:underline"> Project </a>
                        </li>
                        <li className="">
                            <a href="" class="text-neutral-600 hover:underline"> Resume </a>
                        </li>
                        <li className="">
                            <a href="" class="text-neutral-600 hover:underline"> LinkedIn </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

function PhotoBox(){
    return(
        <div className="p-20 flex justify-center">
            <div className="relative bg-black w-70 h-30 rounded-sm flex items-center">
                <div className="absolute bottom-[-1px] left-0 w-full h-5 bg-gray-700 rounded-b-md"
                    style={{
                        clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
                    }}>
                </div>
            </div>
        </div> 
    );
}
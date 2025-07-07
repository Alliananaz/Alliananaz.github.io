export default function Header(){
    return (
        <header className="w-full bg-yellow-200 p-6 mt-6 items-center">
            <div className="hdr w-full space-y-6 items-center">
                <div className="grid grid-row-5 gap-2 items-center">
                    <div className="text-3xl font-semibold">Alliana Shari Nazareno</div>
                    <div className="mt-4"> 14. mai 2004 </div>
                    <div> +47 465 37 422 </div>
                    <div> alliana.nazareno@gmail.com </div>
                    <div> LinkedIn </div>
                </div>
                {/* <div className="flex flex-col mt-3">
                    <div className="text-3xl flex-1 flex justify-center items-center">Alliana Nazareno</div>
                    <div className="flex flex-row">
                        
                        <div className="flex-1 flex justify-center items-center">
                            <h3>14. mai 2003 </h3>
                        </div>
                        <div className="flex-1 flex justify-start items-center">alliana.nazareno@gmail.com <b/></div>
                        <div className="flex-1 flex justify-center items-center">+0000000</div>
                        <div className="flex-1 flex justify-center items-center">
                            <p><a href="www.linkedin.com/in/alliana-shari-nazareno-765276329">LinkedIn</a></p>
                        </div>
                    </div>
                </div> */}
                <hr></hr>
            </div>
        </header>
    )
}
export default function Portfolio(){
    return(
        <div className="min-h-screen bg-red-500 flex items-center justify-center p-4">
            <div className="bg-red-400 w-full max-w-4xl">
                <h1 className="text-right bg-red-200 font-semibold mb-4"> 
                    <div>PROJECT</div>
                    <div>PORTFOLIO</div>
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="bg-red-300 rounded-xl h-40"></div>
                    <div className="bg-red-300 rounded-xl h-32"></div>
                    <div className="bg-red-300 rounded-xl h-32"></div>
                    <div className="bg-red-300 rounded-xl h-32"></div>
                    <div className="bg-red-300 rounded-full h-16 max-sm:col-span-1 col-span-2"></div>
                </div>
            </div>
        </div>
    )
}
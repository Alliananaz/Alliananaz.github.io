export default function Header(){
    return (
        <div className="relative bg-yellow-200 p-10 rounded-xl">
            <div className="">
                <p className="text-3xl text-center font-semibold mb-5">Alliana Shari Nazareno</p>
                <InfoAboutMe text = "14. mai 2004 "/>
                <InfoAboutMe text = "+47 465 37 422" />
                <InfoAboutMe text = "alliana.nazareno@gmail.com" />
                {/* <p> 
                    <a href="www.linkedin.com/in/alliana-shari-nazareno-765276329" class="text-red-600 ms-14 hover:underline"> LinkedIn </a>
                </p> */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-5 border-l-5 border-black rounded-tl-md" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-5 border-r-5 border-black rounded-tr-md" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-5 border-l-5 border-black rounded-bl-md" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-5 border-r-5 border-black rounded-br-md" />
            </div>
        </div>

        
    )
}

function InfoAboutMe({text}) {
    return <div className="text-base/9 text-center">{text}</div>
}

function CornerBorder({text}) {
    return 
    <><div className="absolute top-0 left-0 w-5 h-5 border-t-5 border-l-5 border-black rounded-tl-md" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-5 border-r-5 border-black rounded-tr-md" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-5 border-l-5 border-black rounded-bl-md" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-5 border-r-5 border-black rounded-br-md" />
    </>
}
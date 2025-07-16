import CornerBorder from './CornerBorder.jsx'


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
                <CornerBorder/>
            </div>
        </div>

        
    )
}

function InfoAboutMe({text}) {
    return <div className="text-base/9 text-center">{text}</div>
}


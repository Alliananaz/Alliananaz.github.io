export default function Header(){
    return (
        <header className="bg-yellow-200 p-10">
            <div className="">
                <p className="text-3xl font-semibold mb-5">Alliana Shari Nazareno</p>
                <InfoAboutMe text = "Født: 14. mai 2004 "/>
                <InfoAboutMe text = "Tlfnr: +47 465 37 422" />
                <InfoAboutMe text = "Epost: alliana.nazareno@gmail.com" />
                {/* <p> 
                    <a href="www.linkedin.com/in/alliana-shari-nazareno-765276329" class="text-red-600 ms-14 hover:underline"> LinkedIn </a>
                </p> */}
            </div>
        </header>
    )
}

function InfoAboutMe({text}) {
    return <div className="ms-10 text-lg/10">{text}</div>
}
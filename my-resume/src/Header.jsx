export default function Header(){
    return (
        <header className="bg-yellow-200 p-10">
            <div className="">
                <p className="text-3xl font-semibold">Alliana Shari Nazareno</p>
                <p className="mt-4 ms-14"> Født: 14. mai 2004 </p>
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
    return <div className="ms-14">{text}</div>
}
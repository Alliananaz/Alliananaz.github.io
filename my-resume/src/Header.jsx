export default function Header(){
    return (
        <header className="w-full bg-yellow-200 p-6">
            <div className="hdr w-full space-y-6 ">
                <div className="grid grid-row-5 gap-2">
                    <div className="mt-6 ms-6 text-3xl font-semibold">Alliana Shari Nazareno</div>
                    <div className="mt-4 ms-14"> Født: 14. mai 2004 </div>
                    <InfoAboutMe text = "Tlfnr: +47 465 37 422" />
                    <InfoAboutMe text = "Epost: alliana.nazareno@gmail.com" />
                    <InfoAboutMe text = "LinkedIn" />
                </div>
            </div>
        </header>
    )
}

function InfoAboutMe({text}) {
    return <div className="ms-14">{text}</div>
}
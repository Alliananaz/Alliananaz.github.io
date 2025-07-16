import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import Place from './Place.jsx'


export default function Other(){
    return (
        <>
        <div className='relative bg-green-200 p-10 rounded-xl'> 
            <Title text="OTHER" />
            <div className='bg-green-300 p-5'>
                <div className=''>
                    <OtherHeading text= "Språk" />
                    <p>
                        Norsk, engelsk og tagalog (flytende muntlig og skriftlig)
                    </p>
                </div>
                <br/>
                <div className=''>
                    <OtherHeading text= "Programmeringsspråk" />

                    <ul className="list-none ms-1">
                        <li className="relative pl-10 before:content-['ᯓ★'] before:absolute before:left-0 ">
                            Python (Erfaring fra programfag IT2 på Stabekk videregående
                            og kurset IN1000 - Introduksjon til objektorientert
                            programmering på Universitet i Oslo)
                        </li>
                        <li className="relative pl-10 before:content-['✿'] before:absolute before:left-0 ">
                            Java (Erfaring fra kurset IN1010 - Objektorientert
                            programmering på Universitet i Oslo)    
                        </li>
                        <li className="relative pl-10 before:content-['•ᴗ•'] before:absolute before:left-0 ">
                            HTML og CSS (Erfaring fra programfag IT1 på Stabekk
                            videregående) 
                        </li>
                    </ul>
                </div>
                <br/>
                <div className=''>
                    <OtherHeading text= "Verktøy" />
                    <p> Figma, Canva og Tinkercad (Erfaring fra kursene IN1050 -
                        Introduksjon til design, bruk, interaksjon og IN1060 -
                        Bruksorientert design på Universitet i Oslo) 
                    </p>
                    <br/>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-5 h-5 border-t-5 border-l-5 border-black rounded-tl-md" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-5 border-r-5 border-black rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-5 border-l-5 border-black rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-5 border-r-5 border-black rounded-br-md" />
        </div>
            
        </>
    )
}

function OtherHeading({text}) {
    return <div className="text-lg font-semibold">{text}</div>
}


import Title from './Title.jsx'
import OtherHeading from './OtherHeading.jsx'
import CornerBorder from './CornerBorder.jsx'


export default function Other(){
    return (
        <>
        <div className='relative p-10 rounded-xl shadow-lg'> 
            <Title text="ANNET" />
            <div className='p-5'>
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

            <CornerBorder/>
        </div>    
        </>
    )
}




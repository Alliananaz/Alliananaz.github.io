import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import Place from './Place.jsx'


export default function Other(){
    return (
        <>
        <Title text="Annet" />
        <div className='experience-x mt-6 ms-16'>
            <OtherHeading text= "Språk" />
            <p>
                Norsk, engelsk og tagalog (flytende muntlig og skriftlig)
            </p>
        </div>
        <div className='experience-x mt-6 ms-16'>
            <OtherHeading text= "Programmeringsspråk" />
            <p>
                Python (Erfaring fra programfag IT2 på Stabekk videregående
                og kurset IN1000 - Introduksjon til objektorientert
                programmering på Universitet i Oslo)
            </p>
            <p>
                Java (Erfaring fra kurset IN1010 - Objektorientert
                programmering på Universitet i Oslo)
            </p>
            <p>
                HTML og CSS (Erfaring fra programfag IT1 på Stabekk
                videregående) 
            </p>
        </div>
        <div className='experience-x mt-6 ms-16'>
            <OtherHeading text= "Verktøy" />
            <p> Figma, Canva og Tinkercad (Erfaring fra kursene IN1050 -
                Introduksjon til design, bruk, interaksjon og IN1060 -
                Bruksorientert design på Universitet i Oslo) 
            </p>
        </div>

        </>
    )
}

function OtherHeading({text}) {
    return <div className="font-semibold">{text}</div>
}


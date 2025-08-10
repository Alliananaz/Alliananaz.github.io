import Title from './Title.jsx'
import OtherHeading from './OtherHeading.jsx'
import CornerBorder from '../../components/CornerBorder.jsx'


export default function Other(){
    return (
        <>
        <div className='relative p-5 sm:p-10 rounded-xl shadow-lg'> 
            <Title text="ANNET" />
            <div className='p-5 space-y-8'>
                <div className=''>
                    <OtherHeading text= "Språk" />
                    <p> Norsk, engelsk og tagalog (flytende muntlig og skriftlig) </p>
                </div>
                <div className=''>
                    <OtherHeading text= "Programmeringsspråk / Rammeverk" />

                    <ul className="list-none text-base">
                        <li className="relative pl-10 before:content-['ᯓ★'] before:absolute before:left-0 ">
                            Python 
                        </li>
                        <li className="relative pl-10 before:content-['✿'] before:absolute before:left-0 ">
                            Java    
                        </li>
                        <li className="relative pl-10 before:content-['•ᴗ•'] before:absolute before:left-0 ">
                            HTML og CSS 
                        </li>
                        <li className="relative pl-10 before:content-['•ᴗ•'] before:absolute before:left-0 ">
                            React
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <OtherHeading text= "Verktøy" />
                    <p>Figma, Canva og Tinkercad</p>
                    <p>Visual Studio Code</p>
                    <p>Android Studio</p>
                </div>
            </div>
            <CornerBorder/>
        </div>    
        </>
    );
}




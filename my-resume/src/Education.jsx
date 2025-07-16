import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import Place from './Place.jsx'


export default function Education(){
    return (
        <>
        <div className='relative bg-purple-200 p-10 rounded-xl'> 
            <Title text="UTDANNELSE" />
            <div className='bg-purple-300 p-5'>
                <div className=''>
                    <ExperienceDate text= "08.2023 -" />
                    <Place text = "Universitet i Oslo Informatikk: design, bruk, interaksjon (Bachelor)" />
                </div>
                <br/>
                <div className=''>
                    <ExperienceDate text= "08.2020 - 06.2023" />
                    <Place text = "Stabekk Videregående Skole Studiespesialierende med realfag" />
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


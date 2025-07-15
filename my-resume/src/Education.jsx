import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import Place from './Place.jsx'


export default function Education(){
    return (
        <>
        <div className='bg-purple-200 p-10'> 
            <Title text="Utdannelse" />
            <div className='experience-x mt-6 ms-16 grid grid-col-3 grid-row-2'>
                <ExperienceDate text= "08.2023 -" />
                <Place text = "Universitet i Oslo Informatikk: design, bruk, interaksjon (Bachelor)" />
            </div>
            <br/>
            <div className='experience-x mt-6 ms-16 grid grid-col-3 grid-row-2'>
                <ExperienceDate text= "08.2020 - 06.2023" />
                <Place text = "Stabekk Videregående Skole Studiespesialierende med realfag" />
            </div>
       </div>
        </>
    )
}


import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import EducationType from './OtherHeading.jsx'
import CornerBorder from './CornerBorder.jsx'



export default function Education(){
    return (
        <>
        <div className='relative p-5 sm:p-10 rounded-xl shadow-lg'> 
            <Title text="UTDANNELSE" />
            <div className='p-5 space-y-8'>
                <div className=''>
                    <ExperienceDate text= "08.2023 - Nå" />
                    <EducationType text = "Bachelor i Informatikk: design, bruk, interaksjon" />
                    <p>Universitet i Oslo </p>
                </div>
                <div className=''>
                    <ExperienceDate text= "08.2020 - 06.2023" />
                    <EducationType text = "Studiespesialierende med realfag" />
                    <p>Stabekk Videregående Skole</p>
                </div>
            </div>
            <CornerBorder/>
        </div>
        </>
    )
}

// polaroid frame example 
{/* <div className='relative bg-gray-100 p-5 h-120 shadow-lg'> 
    <div className='bg-slate-50 h-80 p-5'>
        <div className=''>
            <ExperienceDate text= "08.2023 - Nå" />
            <EducationType text = "Bachelor i Informatikk: design, bruk, interaksjon" />
            <p>Universitet i Oslo </p>
        </div>
        <br/>
        <div className=''>
            <ExperienceDate text= "08.2020 - 06.2023" />
            <EducationType text = "Studiespesialierende med realfag" />
            <p>Stabekk Videregående Skole</p>
        </div>
    </div>
    <p className="p-5 font-shadows text-2xl text-center font-semibold ">UTDANNELSE</p>
</div> */}


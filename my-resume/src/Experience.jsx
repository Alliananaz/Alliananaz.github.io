import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import Place from './Place.jsx'


export default function Experience(){
    return (
        <>
        {/* <div className="card-experience mt-8">
            <Title text="Arbeidserfaringer" />
            <ExperienceDate text="07.2023 - " />
        </div> */}

        <Title text="Arbeidserfaringer" />
        <div className='experience-x mt-6 ms-16 grid grid-col-3 grid-row-2'>
            <ExperienceDate text= "07.2023 - " />
            <Place text = "Sabi Sushi Sabi Sushi Fornebu (Servitør tilkallings-/ekstrahjelp)" />
        </div>
        </>
    )
}


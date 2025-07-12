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
            <ExperienceDate text= "07.2023 - nå" />
            <Place text = "Sabi Sushi Sabi Sushi Fornebu (Servitør tilkallings-/ekstrahjelp)" />
            <p>
                Arbeidsbeskrivelse: Tar imot bestillinger og serverer mat og drikke med fokus på god
                kundeservice. Pakker og organiserer takeaway-bestillinger for rask og riktig utlevering.
                Håndterer betalinger og kasseoppgjør, og sørger for at restaurantområdet er rent og ryddig. 
            </p>
        </div>
        <br/>
        <div className='experience-x mt-6 ms-16 grid grid-col-3 grid-row-2'>
            <ExperienceDate text= "08.2022 - 10.2023" />
            <Place text = "YX 7-eleven Høvik (Butikkmedarbeider deltid)" />
            <p>
                Arbeidsbeskrivelse: Betjener kunder og sørger for god service i butikk og ved kassen.
                Påfylling og organisering av varer for å sikre en ryddig butikk. Tilbereder og serverer mat og
                drikke. Sørger for renhold og vedlikehold av butikken og området rundt. 
            </p>
        </div>

        </>
    )
}


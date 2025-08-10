import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import Place from './OtherHeading.jsx'
import CornerBorder from '../../components/CornerBorder.jsx'


export default function Experience(){
    return (
        <div className='relative p-5 sm:p-10 rounded-xl shadow-lg'> 
            <Title text="ARBEIDSERFARING" />
            <div className='p-5 space-y-8'>
                <div className=''>
                    <ExperienceDate text= "08.2023 - Nå" />
                    <Place text = "Sabi Sushi Fornebu og Storo (Servitør tilkallings-/ekstrahjelp)" />
                    <p className=''>
                        Arbeidsbeskrivelse: Tar imot bestillinger og serverer mat og drikke med fokus på god
                        kundeservice. Pakker og organiserer takeaway-bestillinger for rask og riktig utlevering.
                        Håndterer betalinger og kasseoppgjør, og sørger for at restaurantområdet er rent og ryddig. 
                    </p>
                </div>
                <div className=''>
                    <ExperienceDate text = "08.2022 - 10.2023" />
                    <Place text = "YX 7-eleven Høvik (Butikkmedarbeider deltid)" />
                    <p className=''>
                        Arbeidsbeskrivelse: Betjener kunder og sørger for god service i butikk og ved kassen.
                        Påfylling og organisering av varer for å sikre en ryddig butikk. Tilbereder og serverer mat og
                        drikke. Sørger for renhold og vedlikehold av butikken og området rundt. 
                    </p>
                </div>
            </div>
            <CornerBorder/>
        </div>
    )
}


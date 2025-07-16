import Title from './Title.jsx'
import ExperienceDate from './ExperienceDate.jsx'
import Place from './Place.jsx'


export default function Experience(){
    return (
        <>
        <div className='relative bg-red-200 p-10 rounded-xl'> 
            <Title text="ARBEIDSERFARING" />
            <div className='bg-red-300 p-5'>
                <div className=''>
                    <ExperienceDate text= "07.2023 - Nå" />
                    <Place text = "Sabi Sushi Fornebu (Servitør tilkallings-/ekstrahjelp)" />
                    <p className=''>
                        Arbeidsbeskrivelse: Tar imot bestillinger og serverer mat og drikke med fokus på god
                        kundeservice. Pakker og organiserer takeaway-bestillinger for rask og riktig utlevering.
                        Håndterer betalinger og kasseoppgjør, og sørger for at restaurantområdet er rent og ryddig. 
                    </p>
                </div>
                <br/>
                <div className=''>
                    <ExperienceDate text = "08.2022 - 10.2023" />
                    <Place text = "YX 7-eleven Høvik (Butikkmedarbeider deltid)" />
                    <p className=''>
                        Arbeidsbeskrivelse: Betjener kunder og sørger for god service i butikk og ved kassen.
                        Påfylling og organisering av varer for å sikre en ryddig butikk. Tilbereder og serverer mat og
                        drikke. Sørger for renhold og vedlikehold av butikken og området rundt. 
                    </p>
                </div>

                <div className="absolute top-0 left-0 w-5 h-5 border-t-5 border-l-5 border-black rounded-tl-md" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-5 border-r-5 border-black rounded-tr-md" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-5 border-l-5 border-black rounded-bl-md" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-5 border-r-5 border-black rounded-br-md" />
            
            </div>
            
        </div>
        </>
    )
}


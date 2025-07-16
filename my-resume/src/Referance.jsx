import Title from './Title.jsx'


export default function Referance(){
    return (
        <>
        <div className='relative bg-blue-200 p-10 rounded-xl'>
            <Title text="REFERANSE" />
            <div className='bg-blue-300'>
                <p className='text-md p-5'>Tilgjengelig ved forespørsel</p>
            </div>

            <div className="absolute top-0 left-0 w-5 h-5 border-t-5 border-l-5 border-black rounded-tl-md" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-5 border-r-5 border-black rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-5 border-l-5 border-black rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-5 border-r-5 border-black rounded-br-md" />

        </div>
        </>
    )
}


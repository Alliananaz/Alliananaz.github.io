import Title from './Title.jsx'
import CornerBorder from './CornerBorder.jsx'

export default function Referance(){
    return (
        <>
        <div className='relative p-5 sm:p-10 rounded-xl shadow-lgg'>
            <Title text="REFERANSE" />
            <div className=''>
                <p className='text-md p-5'>Tilgjengelig ved forespørsel</p>
            </div>

            <CornerBorder/>
        </div>
        </>
    )
}


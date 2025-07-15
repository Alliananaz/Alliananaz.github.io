import Title from './Title.jsx'


export default function Referance(){
    return (
        <>
        <div className='bg-blue-200 p-10'>
            <Title text="Referance" />
            <div className='mt-6 ms-16'>
                <p>Tilgjengelig ved forespørsel</p>
            </div>
            <br/>
            <button class="bg-indigo-600 hover:not-focus:bg-indigo-700">
                Save changes
            </button>
        </div>
        </>
    )
}


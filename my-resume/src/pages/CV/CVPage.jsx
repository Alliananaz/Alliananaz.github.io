import Header from './Header.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import Other from './Other.jsx'
import Referance from './Referance.jsx'
import BackButton from '../../components/BackButton.jsx'

export default function CVPage() {
  return (
    <>
      <div className='relative min-h-screen '>
        <BackButton/>
        <div className='min-h-screen flex justify-center'> 
          <div className='w-full max-w-2xl my-10 p-4 flex flex-col space-y-10'> 
            <Header/>
            <Experience/>
            <Education/> 
            <Other/> 
            <Referance/>
          </div>
        </div>
      </div>  
    </>
  )
}
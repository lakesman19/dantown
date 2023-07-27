import Aside from '@/Components/Homepage/aside/Aside'
import Main from '@/Components/Homepage/main/Main'

export default function Home() {
  return (
    <main className='w-[100%] flex justify-center items-center pb-5 '>
      <div className=' w-[100%] flex-col md:flex-row flex justify-between items-cente '>
        <Main />
        <Aside />
      </div>
    </main>
  )
}

import Aside from '@/Components/Homepage/aside/Aside'
import Main from '@/Components/Homepage/main/Main'

export default function Home() {
  return (
    <main className='w-[100%] flex justify-center items-center '>
      <div className='w-[100%] flex justify-between items-center p-4 '>
        <Main />
        <Aside />
      </div>
    </main>
  )
}

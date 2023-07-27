import Wrapper from '@/Components/Wrapper'
import './globals.css'
// import 'public/css/globals.css'
import { WrapperContext } from '@/context/WrapperContext/WrapperContext'

export const metadata = {
  title: 'dantown intership',
  description: 'A project created with next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        <WrapperContext>
          <Wrapper> {children}</Wrapper>
        </WrapperContext>
      </body>
    </html>
  )
}

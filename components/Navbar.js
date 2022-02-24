import requests from '../utils/requests'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="relative flex items-center">
      <div
        className="flex px-10 py-5 sm:px-20 text-lg md:text-xl
        whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll 
        scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:mr-12 cursor-pointer hover:text-white active:text-[#26ffcc]
              relative before:absolute before:transition-width before:duration-300 ease-out
              before:h-[2px] before:right-0 before:bottom-[-5px] before:w-0 before:bg-[#26ffcc] 
              before:hover:w-full before:hover:left-0 before:hover:right-auto"
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absolute  left-0 bg-gradient-to-r from-[#06202a] 
        h-10 w-[5%]"
      />
      <div
        className="absolute  right-0 bg-gradient-to-l from-[#06202a]
        h-10 w-1/12"
      />
    </nav>
  )
}

export default Navbar

import {SearchIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <header>
        <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        {/* Left Section */}
        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
        </div>
        {/* Right  Section */}
        <div>
            <SearchIcon className="hidden sm:inline h-6 >
        </div>

    </header>
  )
}

export default Header
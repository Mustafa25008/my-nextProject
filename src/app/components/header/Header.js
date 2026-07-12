import Sitelogo from "../Sitelogo";
import SearchIcon from "../search";

export default function Header() {
  return (
    <header className={`flex justify-between items-center text-white h-20 shadow-2xl`}>
      <div className="relative h-13 w-13 border-4 border-white rounded-full p-2">
        <Sitelogo />
      </div>
      <nav>
        <ul className="flex gap-20 font-serif">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>
            <SearchIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon
            icon={faHome}
            title="see all tickets"
            className="icon hover:text-cyan-400"
          />
        </Link>
        <Link href="/ticketPage/new">
          <FontAwesomeIcon
            icon={faTicket}
            className="icon hover:text-cyan-400"
            title="Add New Ticket"
          />
        </Link>
      </div>
      <div>
        <p className="text-defaultText hover:text-cyan-400 cursor-pointer">
          suleman@gmail.com
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

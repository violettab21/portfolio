import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-custom-dark w-full flex flex-col justify-center items-center mt-10 py-5 border-t border-t-amber-100/5"
    >
      <h1 className="text-2xl">My Contacts:</h1>
      <ul className="mt-5 flex flex-col gap-2 rounded-2xl p-5 shadow-xl bg-custom-card">
        <li className="flex items-center gap-2">
          <a
            className="text-teal-50 flex gap-2 items-center"
            href="mailto: violettabatsura@gmail.com"
          >
            <MdEmail className="inline" size={20} /> violettabatsura@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            className="text-teal-50 flex gap-2 items-center"
            href="tel:+375445471674"
          >
            <FaPhoneAlt className="inline" /> +375445471674
          </a>
        </li>
        <li>
          <a
            className="text-teal-50 flex gap-2 items-center"
            href="https://www.linkedin.com/in/violetta-batsura-79236b16b/"
            target="_blank"
          >
            <FaLinkedin className="inline" size={20} /> Violetta Batsura
          </a>
        </li>
        <li>
          <a
            className="text-teal-50 flex gap-2 items-center"
            href="https://t.me/vbatsura21"
            target="_blank"
          >
            <FaTelegram className="inline" size={20} /> @vbatsura21
          </a>
        </li>
      </ul>
    </footer>
  );
}

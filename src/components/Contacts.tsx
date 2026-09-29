import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Contacts() {
  return (
    <section>
      <h1 className="text-2xl">Contacts</h1>
      <ul className="mt-5 flex flex-col gap-2 bg-custom-card p-2">
        <li className="flex items-center gap-2">
          <a href="mailto: violettabatsura@gmail.com">
            {" "}
            <MdEmail className="inline" size={20} /> violettabatsura@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="tel:+375445471674">
            <FaPhoneAlt className="inline" /> +375445471674
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/violetta-batsura-79236b16b/"
            target="_blank"
          >
            <FaLinkedin className="inline" size={20} /> Violetta Batsura
          </a>
        </li>
        <li>
          <a href="https://t.me/vbatsura21" target="_blank">
            <FaTelegram className="inline" size={20} /> @vbatsura21
          </a>
        </li>
      </ul>
    </section>
  );
}

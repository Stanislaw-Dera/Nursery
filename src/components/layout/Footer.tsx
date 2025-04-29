
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-green-300" />
                <span>ul. Kwiatowa 5, 00-001 Warszawa</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-300" />
                <span>123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-300" />
                <span>kontakt@maleskarby.pl</span>
              </div>
            </div>
          </div>

          {/* Nawigacja */}
          <div>
            <h3 className="text-xl font-bold mb-4">Szybki dostęp</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300 transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/aktualnosci" className="hover:text-green-300 transition-colors">
                  Aktualności
                </Link>
              </li>
              <li>
                <Link to="/informacje" className="hover:text-green-300 transition-colors">
                  Informacje
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-green-300 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Informacje */}
          <div>
            <h3 className="text-xl font-bold mb-4">Godziny otwarcia</h3>
            <p className="mb-2">Poniedziałek - Piątek: 6:30 - 17:00</p>
            <p>Weekendy i święta: Zamknięte</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-600 text-center">
          <p>© {new Date().getFullYear()} Żłobek Małe Skarby. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

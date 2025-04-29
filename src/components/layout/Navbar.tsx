
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, Home, FileText, Users, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-700">Żłobek Małe Skarby</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    <Home className="mr-2 h-4 w-4" />
                    Strona główna
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    <FileText className="mr-2 h-4 w-4" />
                    Informacje
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/informacje"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 text-lg font-medium text-green-700">
                              Informacje
                            </div>
                            <p className="text-sm text-green-600">
                              Ważne informacje dotyczące naszego żłobka
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/informacje/dokumenty"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700"
                          >
                            <div className="text-sm font-medium">Dokumenty i Ubezpieczenie</div>
                            <p className="line-clamp-2 text-sm text-green-600">
                              Dokumenty do pobrania i informacje o ubezpieczeniu
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/informacje/dostepnosc-nauczycieli"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700"
                          >
                            <div className="text-sm font-medium">Dostępność nauczycieli</div>
                            <p className="line-clamp-2 text-sm text-green-600">
                              Godziny konsultacji z nauczycielami
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/informacje/odplatnosci"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700"
                          >
                            <div className="text-sm font-medium">Odpłatności</div>
                            <p className="line-clamp-2 text-sm text-green-600">
                              Informacje o opłatach
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/informacje/rada-rodzicow"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700"
                          >
                            <div className="text-sm font-medium">Rada rodziców</div>
                            <p className="line-clamp-2 text-sm text-green-600">
                              Informacje o radzie rodziców
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/informacje/kadra"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700"
                          >
                            <div className="text-sm font-medium">Kadra</div>
                            <p className="line-clamp-2 text-sm text-green-600">
                              Nasi nauczyciele i personel
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/kontakt" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    <Mail className="mr-2 h-4 w-4" />
                    Kontakt
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-green-700"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-green-100">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center py-2 px-4 rounded-md ${
                    isActive 
                      ? "bg-green-100 text-green-700" 
                      : "text-green-700 hover:bg-green-50"
                  }`
                }
                onClick={toggleMenu}
              >
                <Home size={18} className="mr-2" />
                Strona główna
              </NavLink>

              <MobileSubmenu
                title="Informacje"
                icon={<FileText size={18} className="mr-2" />}
                links={[
                  { to: "/informacje", label: "Wszystkie informacje" },
                  { to: "/informacje/dokumenty", label: "Dokumenty i Ubezpieczenie" },
                  { to: "/informacje/dostepnosc-nauczycieli", label: "Dostępność nauczycieli" },
                  { to: "/informacje/odplatnosci", label: "Odpłatności" },
                  { to: "/informacje/rada-rodzicow", label: "Rada rodziców" },
                  { to: "/informacje/kadra", label: "Kadra" },
                ]}
                onLinkClick={toggleMenu}
              />

              <NavLink
                to="/kontakt"
                className={({ isActive }) =>
                  `flex items-center py-2 px-4 rounded-md ${
                    isActive 
                      ? "bg-green-100 text-green-700" 
                      : "text-green-700 hover:bg-green-50"
                  }`
                }
                onClick={toggleMenu}
              >
                <Mail size={18} className="mr-2" />
                Kontakt
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Komponent dla mobilnych podmenu
interface MobileSubmenuProps {
  title: string;
  icon: React.ReactNode;
  links: { to: string; label: string }[];
  onLinkClick: () => void;
}

const MobileSubmenu: React.FC<MobileSubmenuProps> = ({ title, icon, links, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleSubmenu}
        className="flex items-center justify-between py-2 px-4 rounded-md text-green-700 hover:bg-green-50"
      >
        <div className="flex items-center">
          {icon}
          {title}
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div className="ml-6 mt-1 flex flex-col space-y-1 border-l-2 border-green-200 pl-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `py-2 px-4 rounded-md ${
                  isActive 
                    ? "bg-green-100 text-green-700" 
                    : "text-green-600 hover:bg-green-50"
                }`
              }
              onClick={onLinkClick}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Wrench,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966560877272", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+966560877272";
  };

  const services = [
    // { name: "جميع الخدمات", path: "/services" },
    { name: "كشف تسربات المياه", path: "/services/leak-detection" },
    { name: "إصلاح المواسير", path: "/services/pipe-repair" },
    { name: "تركيب سخانات", path: "/services/heater-installation" },
    { name: "تنظيف المجاري", path: "/services/drain-cleaning" },
    { name: "تركيب خلاطات", path: "/services/faucet-installation" },
    { name: "سباكة المطابخ والحمامات", path: "/services/kitchen-bathroom" },
    { name: "صيانة دورية", path: "/services/maintenance" },
    { name: "افضل سباك بالرياض", path: "/services/Bestsibak" },
  ];

  const navLinkClasses =
    "text-sm font-medium transition-colors duration-200 hover:text-blue-600";
  const activeNavLinkClasses = "text-blue-600";

  const isServicesActive =
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/best-services");

  return (
    <>
      <nav className="fixed top-0 w-full z-50 navbar-blur border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 space-x-reverse"
              onClick={() => setIsOpen(false)}
            >
              <Wrench className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">
                سباكة الرياض
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 space-x-reverse">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive ? activeNavLinkClasses : "text-gray-700"
                  }`
                }
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive ? activeNavLinkClasses : "text-gray-700"
                  }`
                }
              >
                من نحن
              </NavLink>

              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`flex items-center ${navLinkClasses} ${
                    isServicesActive ? activeNavLinkClasses : "text-gray-700"
                  }`}
                >
                  الخدمات
                  <ChevronDown
                    className={`mr-1 h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-10"
                    >
                      {services.map((service) => (
                        <NavLink
                          key={service.path}
                          to={service.path}
                          className={({ isActive }) =>
                            `block w-full text-right px-4 py-2 text-sm transition-colors ${
                              isActive
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            }`
                          }
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </NavLink>
                      ))}
                      <div className="my-1 border-t border-gray-100"></div>
                      <NavLink
                        to="/best-services"
                        className={({ isActive }) =>
                          `block w-full text-right px-4 py-2 text-sm font-bold transition-colors ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "text-blue-600 hover:bg-blue-600 hover:text-white"
                          }`
                        }
                        onClick={() => setServicesOpen(false)}
                      >
                        أفضل خدمات السباكة بالرياض
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive ? activeNavLinkClasses : "text-gray-700"
                  }`
                }
              >
                آراء العملاء
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive ? activeNavLinkClasses : "text-gray-700"
                  }`
                }
              >
                اتصل بنا
              </NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-2 space-x-reverse">
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg flex items-center"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                واتساب
              </Button>
              <Button
                onClick={handleCallClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <Phone className="ml-2 h-4 w-4" />
                اتصل الآن
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2 z-50 relative"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isOpen ? "x" : "menu"}
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
          >
            <div className="p-5 flex items-center justify-between border-b">
              <Link
                to="/"
                className="flex items-center space-x-2 space-x-reverse"
                onClick={() => setIsOpen(false)}
              >
                <Wrench className="h-7 w-7 text-blue-600" />
                <span className="text-lg font-bold text-gray-800">
                  سباكة الرياض
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-800"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow p-5 space-y-3 overflow-y-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block text-lg font-medium p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block text-lg font-medium p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                من نحن
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block text-lg font-medium p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                الخدمات
              </NavLink>
              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  className={({ isActive }) =>
                    `block text-sm font-medium p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </NavLink>
              ))}
              <NavLink
                to="/best-services"
                className={({ isActive }) =>
                  `block text-lg font-medium p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                أفضل الخدمات
              </NavLink>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  `block text-lg font-medium p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                آراء العملاء
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block text-lg font-medium p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                اتصل بنا
              </NavLink>
            </div>
            <div className="p-5 border-t space-y-3">
              <Button
                onClick={handleCallClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base"
              >
                <Phone className="ml-2 h-5 w-5" />
                اتصل الآن
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-3 text-base"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                واتساب
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { useState } from "react"
import { useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const miniLinks = ["Partnerships", "Institutional", "Funding"]
  const navLinks = ["Trading", "Insights", "Corporate"]
  const [isSticky, setIsSticky] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <>
      <header
        className={`sticky top-0 w-full z-20 overflow-hidden transition-colors duration-300 ${isSticky ? 'bg-[#FFFBF9]' : ''
          }`}
        style={{
          background: isSticky ? undefined : "rgba(242, 216, 211, 0.1)",
          boxShadow: isSticky ? "0 2px 4px rgba(0,0,0,0.1)" : "0px 4px 3px 0px rgba(183, 183, 183, 0.25)",
        }}
      >

        <div
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 90% 20%, rgba(255, 87, 34, 0.10) 0%, rgba(255, 87, 34, 0.05) 25%, rgba(255, 87, 34, 0.025) 40%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 95% 30%, rgba(255, 87, 34, 0.07) 0%, rgba(255, 87, 34, 0.035) 30%, rgba(255, 87, 34, 0.018) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 60%, rgba(255, 87, 34, 0.05) 75%, rgba(255, 87, 34, 0.025) 85%, transparent 95%)",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-5 sm:mx-6 md:mx-10 lg:mx-[80px] xl:mx-[100px]">
          <div className="flex justify-end py-2">
            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] text-sm sm:text-base md:text-[14px] lg:text-[16px] font-medium text-[#DE2605]">
              {miniLinks.map((label) => (
                <span
                  key={label}
                  className="hover:underline focus:outline-none transition-all duration-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-[] py-3 sm:py-2 relative">
            <div className="flex items-center gap-4 sm:gap-10 md:gap-[60px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-JvtCp3eGbwrNUCKAHpTas3wGuWwtQU.png"
                alt="LTI Logo"
                className="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-auto object-contain"
                crossOrigin="anonymous"
              />
              <nav className="hidden md:flex gap-[30px] lg:gap-[60px] text-gray-700 text-[20px] font-semibold">
                {navLinks.map((label) => (
                  <div
                    key={label}
                    className="group flex items-center gap-1 cursor-pointer transition-colors duration-200"
                  >
                    <span className="text-gray-600 transition-colors duration-200 group-hover:text-[#FF5722]">
                      {label}
                    </span>
                    <ChevronDown className="h-6 w-6 transition-colors duration-200 text-gray-600 group-hover:text-[#FF5722]" />
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Button className="group mt-1 py-[20px] px-[40px] rounded-full bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold text-[16px]">
                  <span className="transform transition-transform duration-300 group-hover:scale-105">
                    Login
                  </span>
                </Button>

              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                  {menuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <div onClick={toggleMenu} className="fixed inset-0 bg-black bg-opacity-50 z-30" />
          <div
            className="fixed top-0 right-0 h-full w-full z-40 transform transition-transform duration-300 translate-x-0"
            style={{
              background: "#FFF0EB",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-[#FF5722]">Menu</h2>
              <button onClick={toggleMenu}>
                <X className="h-6 w-6 text-gray-800" />
              </button>
            </div>
            <nav className=" flex flex-col gap-4 px-6 py-6 text-gray-700 text-base font-medium">
              {navLinks.map((label) => (
                <div
                  key={label}
                  className="group flex items-center gap-1 cursor-pointer transition-colors duration-200"
                >
                  <span className="text-gray-600 transition-colors duration-200 group-hover:text-[#FF5722]">
                    {label}
                  </span>
                  <ChevronDown className="h-4 w-4 transition-colors duration-200 text-gray-600 group-hover:text-[#FF5722]" />
                </div>

              ))}
              <Button className="mt-4 py-[9px] px-[39px] rounded-full bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold transform transition-transform duration-300 hover:scale-105">
                Login
              </Button>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export default Header

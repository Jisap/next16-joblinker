"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Main = () => {

  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [collapsed, setCollapsed] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const { name } = JSON.parse(userData)
      setUserName(name)
    }
  }, []);

  const handleMenuClick = (key: string) => {
    switch (key) {
      case "logout": {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
          localStorage.removeItem("user");
          router.push("/UI-Components/Login");
        }
        break;
      }
      default:
        // Para cualquier otra opción, actualizamos la sección activa
        setActiveSection(key);
        break;
    }
  };

  const menuItem = [
    { key: "dashboard", icon: "/Images/home.svg", label: "Dashboard" },
    { key: "postedJobs", icon: "/Images/bag.svg", label: "Posted Jobs" },
    { key: "recruters", icon: "/Images/user.svg", label: "Recruters" },
    { key: "candidates", icon: "/Images/users.svg", label: "Candidates" },
    { key: "logout", icon: "/Images/logout.png", label: "Logout" },

  ]

  return (
    <div className='flex w-full h-screen'>
      {/* Sidebar */}
      <div
        className={`
          h-full bg-black text-white border border-gray-700 flex flex-col justify-between transition-all duration-500
          ${collapsed ? "w-[100px]" : "w-[95px] lg:w-[20%]"}
        `}
      >
        {/* logo */}
        <div>
          <div className='flex items-center justify-between border-b border-gray-700 h-[90px] px-10'>
            <Link
              href="/"
              className='text-3xl font-bold Merienda text-white whitespace-nowrap overflow-hidden'
            >
              {collapsed ? (
                <span className='text-white text-2xl font-extrabold'>J</span>
              ) : (
                <>
                  Job<span className='text-prim'>Linker</span>
                </>
              )}
            </Link>
          </div>

          {/* Menu */}
          <ul className='p-6 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-600 scrollbar-gray-900'>
            {menuItem.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleMenuClick(item.key)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-md w-full text-left transition-all duration-300 cursor-pointer 
                    ${collapsed ? "justify-center" : ""}
                    ${activeSection === item.key
                      ? "bg-prim"
                      : "hover:bg-prim"
                    }`
                  }
                >
                  <img src={item.icon} alt={item.label} width={22} height={22} />
                  {!collapsed && (<span className='text-white hidden lg:block'>{item.label}</span>)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import AppliedJobs from "@/public/Images/Applied-Jobs.svg"
import RecrutesImg from "@/public/Images/Recrutes.svg"
import CandidateImg from "@/public/Images/Candidate.svg"
import ArticlesImg from "@/public/Images/Articles.svg"

import Jobs from "@/app/JsonData/Jobs.json"
import Recruters from "@/app/JsonData/Recruters.json"
import Candidates from "@/app/JsonData/Candidates.json"
import Blog from "@/app/JsonData/Blogs.json"

import CountUp from "react-countup"
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


const Main = () => {

  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [collapsed, setCollapsed] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")
  const chartRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Applied Jobs", "Recruters", "Candidates", "Articles", "Resumes"],
        datasets: [
          {
            label: "Total ",
            data: [Jobs.length, Recruters.length, Candidates.length, Blog.length, 13],
            backgroundColor: [
              "rgba(79, 70, 229, 0.7)",
              "rgba(16, 185, 129, 0.7)",
              "rgba(245, 158, 11, 0.7)",
              "rgba(244, 63, 94, 0.7)",
              "rgba(14, 165, 233, 0.7)",
            ],
            borderColor: [
              "#4F46E5",
              "#10B981",
              "#F59E0B",
              "#F43F5E",
              "#0EA5E9",
            ],
            borderWidth: 1,
            borderRadius: 30,
            barPercentage: 0.7,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
        animation: { duration: 1200, easing: "easeOutQuart" },
      },
    });

    return () => myChart.destroy();
  }, [Jobs.length, Recruters.length, Candidates.length, Blog.length]);

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
      <nav
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
      </nav>

      {/* Main Content */}
      <div className='w-full h-full'>
        {/* Top nav */}
        <div className='w-full flex justify-between items-center gap-3 bg-black border-b border-gray-700 h-[90px] px-8'>
          {/* Toggle Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className='arrow-right bg-prim p-2 rounded-sm cursor-pointer transition-transform duration-500'
          >
            <Image
              src={collapsed ? "/Images/arrow-left.svg" : "/Images/arrow-right.svg"}
              alt="Arrow-right-image"
              width={20}
              height={20}
              className={`transition-transform duration-500 ${collapsed ? "rotate-0" : "rotate-180"}`}
            />
          </button>

          {/* User Info */}
          <div className='user-profile flex gap-2 items-center'>
            <Image
              src="/Images/user.png"
              alt="user-image"
              width={50}
              height={50}
              className='bg-white rounded-full'
            />

            <div className='profile-info'>
              <p className='m-0 text-lg'>
                {userName || "Guest User"}
                <span className='text-xs block text-gray-300'>FullStack Developer</span>
              </p>
            </div>
          </div>
        </div>

        {/* Section Rendering */}
        <div className='p-4 dashboard-overflow overflow-y-scroll h-[calc(100vh-90px)]'>
          {activeSection === "dashboard" && (
            <div>
              <h2 className='Unbounded text-3xl font-bold'>Dashboard</h2>

              <div className='flex flex-col lg:flex-row justify-between gap-5 mt-10'>
                <div className='w-full lg:w-1/1'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex items-center justify-center cursor-pointer gap-2 border border-gray-500 p-4 rounded-2xl hover:shadow-lg transition-all duration-300'>
                      <Image src={AppliedJobs} alt="Applied-Jobs-image" width={60} height={60} />

                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-2xl'>
                          <CountUp end={Jobs.length} duration={2} />
                        </h2>

                        <h3 className='Unbounded text-md text-gray-300'>Applied Jobs</h3>
                      </div>
                    </div>

                    <div className='flex items-center justify-center cursor-pointer gap-2 border border-gray-500 p-4 rounded-2xl hover:shadow-lg transition-all duration-300'>
                      <Image src={RecrutesImg} alt="Recrutes-image" width={60} height={60} />

                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-2xl'>
                          <CountUp end={Recruters.length} duration={2} />
                        </h2>

                        <h3 className='Unbounded text-md text-gray-300'>Recrutes</h3>
                      </div>
                    </div>

                    <div className='flex items-center justify-center cursor-pointer gap-2 border border-gray-500 p-4 rounded-2xl hover:shadow-lg transition-all duration-300'>
                      <Image src={CandidateImg} alt="Candidate-image" width={60} height={60} />

                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-2xl'>
                          <CountUp end={Candidates.length} duration={2} />
                        </h2>

                        <h3 className='Unbounded text-md text-gray-300'>Candidates</h3>
                      </div>
                    </div>

                    <div className='flex items-center justify-center cursor-pointer gap-2 border border-gray-500 p-4 rounded-2xl hover:shadow-lg transition-all duration-300'>
                      <Image src={ArticlesImg} alt="Articles-image" width={60} height={60} />

                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-2xl'>
                          <CountUp end={Blog.length} duration={2} />
                        </h2>

                        <h3 className='Unbounded text-md text-gray-300'>Articles</h3>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className='p-4 rounded-2xl border border-gray-500 shadow mt-5 cursor-pointer'>
                    <canvas ref={chartRef} height={130}></canvas>
                  </div>
                </div>

                <div className='w-full lg:w-1/2'>

                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Main
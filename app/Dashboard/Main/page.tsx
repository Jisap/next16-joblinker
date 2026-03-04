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
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true },
        },
        animation: { duration: 1200, easing: "easeOutQuart" },
      },
    });

    return () => myChart.destroy();
  }, [Jobs.length, Recruters.length, Candidates.length, Blog.length, activeSection]);

  const menuItem = [
    { key: "dashboard", icon: "/Images/home.svg", label: "Dashboard" },
    { key: "postedJobs", icon: "/Images/bag.svg", label: "Posted Jobs" },
    { key: "recruters", icon: "/Images/user.svg", label: "Recruters" },
    { key: "candidates", icon: "/Images/users.svg", label: "Candidates" },
    { key: "logout", icon: "/Images/logout.png", label: "Logout" },

  ]

  return (
    <div className='flex w-full h-screen overflow-hidden bg-black text-white'>
      {/* Sidebar Overlay for Mobile */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setCollapsed(true)}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed lg:sticky top-0 left-0 h-full bg-black text-white border-r border-gray-700 flex flex-col justify-between transition-all duration-300 z-50
          ${collapsed ? "-translate-x-full lg:translate-x-0 lg:w-[80px]" : "translate-x-0 w-[280px] lg:w-[20%]"}
        `}
      >
        {/* logo */}
        <div>
          <div className='flex items-center justify-between border-b border-gray-700 h-[70px] lg:h-[90px] px-6 lg:px-10'>
            <Link
              href="/"
              className='text-2xl lg:text-3xl font-bold Merienda text-white whitespace-nowrap overflow-hidden'
            >
              {collapsed ? (
                <span className='text-white text-2xl font-extrabold lg:mx-auto'>J</span>
              ) : (
                <>
                  Job<span className='text-prim'>Linker</span>
                </>
              )}
            </Link>
            {/* Close button for mobile */}
            {!collapsed && (
              <button
                onClick={() => setCollapsed(true)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <i className="bi bi-x-lg text-xl"></i>
              </button>
            )}
          </div>

          {/* Menu */}
          <ul className='p-4 lg:p-6 space-y-2 lg:space-y-4 overflow-y-auto'>
            {menuItem.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleMenuClick(item.key)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-md w-full text-left transition-all duration-300 cursor-pointer 
                    ${collapsed ? "lg:justify-center px-2" : ""}
                    ${activeSection === item.key
                      ? "bg-prim text-white"
                      : "hover:bg-prim/20 text-gray-400 hover:text-white"
                    }`
                  }
                >
                  <img src={item.icon} alt={item.label} width={22} height={22} className={activeSection === item.key ? "" : "opacity-70"} />
                  {(!collapsed || (collapsed && false)) && (
                    <span className={`text-white ${collapsed ? "lg:hidden" : "block"}`}>{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className='flex-1 flex flex-col h-full min-w-0'>
        {/* Top nav */}
        <div className='w-full flex justify-between items-center gap-3 bg-black border-b border-gray-700 h-[70px] lg:h-[90px] px-4 lg:px-8'>
          {/* Toggle Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className='bg-prim p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center'
          >
            <i className={`bi bi-list text-2xl text-white transition-transform duration-300 ${collapsed ? "" : "rotate-90"}`}></i>
          </button>

          {/* User Info */}
          <div className='user-profile flex gap-3 items-center'>
            <div className='profile-info text-right hidden sm:block'>
              <p className='m-0 text-sm lg:text-lg font-semibold text-white'>
                {userName || "Guest User"}
                <span className='text-[10px] lg:text-xs block text-gray-400'>FullStack Developer</span>
              </p>
            </div>
            <Image
              src="/Images/user.png"
              alt="user-image"
              width={40}
              height={40}
              className='bg-white rounded-full lg:w-[50px] lg:h-[50px]'
            />
          </div>
        </div>

        {/* Section Rendering */}
        <div className='p-4 lg:p-8 dashboard-overflow overflow-y-auto h-[calc(100vh-70px)] lg:h-[calc(100vh-90px)]'>
          {activeSection === "dashboard" && (
            <div className="max-w-[1600px] mx-auto pb-10">
              <h2 className='Unbounded text-2xl lg:text-3xl font-bold mb-6'>Dashboard</h2>

              <div className='flex flex-col xl:flex-row gap-6 lg:gap-8'>
                <div className='w-full xl:w-[65%]'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                    <div className='flex items-center gap-4 border border-gray-700 p-5 rounded-2xl bg-gray-900/40 hover:border-prim transition-all duration-300'>
                      <Image src={AppliedJobs} alt="Applied-Jobs-image" width={50} height={50} className="lg:w-[60px] lg:h-[60px]" />
                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-xl lg:text-2xl font-bold'>
                          <CountUp end={Jobs.length} duration={2} />
                        </h2>
                        <h3 className='Unbounded text-xs lg:text-sm text-gray-400'>Applied Jobs</h3>
                      </div>
                    </div>

                    <div className='flex items-center gap-4 border border-gray-700 p-5 rounded-2xl bg-gray-900/40 hover:border-prim transition-all duration-300'>
                      <Image src={RecrutesImg} alt="Recrutes-image" width={50} height={50} className="lg:w-[60px] lg:h-[60px]" />
                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-xl lg:text-2xl font-bold'>
                          <CountUp end={Recruters.length} duration={2} />
                        </h2>
                        <h3 className='Unbounded text-xs lg:text-sm text-gray-400'>Recruters</h3>
                      </div>
                    </div>

                    <div className='flex items-center gap-4 border border-gray-700 p-5 rounded-2xl bg-gray-900/40 hover:border-prim transition-all duration-300'>
                      <Image src={CandidateImg} alt="Candidate-image" width={50} height={50} className="lg:w-[60px] lg:h-[60px]" />
                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-xl lg:text-2xl font-bold'>
                          <CountUp end={Candidates.length} duration={2} />
                        </h2>
                        <h3 className='Unbounded text-xs lg:text-sm text-gray-400'>Candidates</h3>
                      </div>
                    </div>

                    <div className='flex items-center gap-4 border border-gray-700 p-5 rounded-2xl bg-gray-900/40 hover:border-prim transition-all duration-300'>
                      <Image src={ArticlesImg} alt="Articles-image" width={50} height={50} className="lg:w-[60px] lg:h-[60px]" />
                      <div className='flex flex-col'>
                        <h2 className='Unbounded text-xl lg:text-2xl font-bold'>
                          <CountUp end={Blog.length} duration={2} />
                        </h2>
                        <h3 className='Unbounded text-xs lg:text-sm text-gray-400'>Articles</h3>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className='p-4 lg:p-6 rounded-2xl border border-gray-700 bg-gray-900/40 shadow-xl mt-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700'>
                    <div className="min-w-[600px] h-[300px]">
                      <canvas ref={chartRef}></canvas>
                    </div>
                  </div>
                </div>

                <div className='w-full xl:w-[35%]'>
                  <div className='border border-gray-700 bg-gray-900/40 rounded-2xl p-4 lg:p-6 shadow-xl'>
                    <h2 className='Unbounded text-xl lg:text-2xl mb-5 font-bold'>
                      Top Candidates
                    </h2>

                    <div className='flex flex-col gap-3'>
                      {Candidates.slice(0, 5).map((candidate, index) => (
                        <div key={index} className='border border-gray-800 rounded-2xl p-4 hover:bg-gray-800 transition-colors cursor-pointer group'>
                          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                            <div className='flex items-center gap-4'>
                              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-prim transition-all">
                                <Image
                                  src={candidate.image}
                                  alt={candidate.name}
                                  fill
                                  className='object-cover'
                                />
                              </div>
                              <div className='flex flex-col'>
                                <h2 className='Unbounded font-semibold text-white text-sm lg:text-base'>{candidate.name}</h2>
                                <p className='text-gray-400 text-xs'>{candidate.role}</p>
                              </div>
                            </div>
                            <div className='flex items-center gap-x-4 gap-y-2 flex-wrap justify-start sm:justify-end w-full sm:w-auto mt-2 sm:mt-0'>
                              <span className='text-gray-400 flex items-center gap-1.5 text-xs whitespace-nowrap'>
                                <i className='bi bi-geo-alt text-prim'></i> {candidate.location}
                              </span>
                              <div className='flex text-yellow-500 text-xs'>
                                {[...Array(4)].map((_, i) => <i key={i} className='bi bi-star-fill'></i>)}
                                <i className='bi bi-star text-gray-600'></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "postedJobs" && (
            <div className="max-w-[1600px] mx-auto pb-10">
              <h2 className='Unbounded text-2xl lg:text-3xl font-bold mb-6'>Posted Jobs</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
                {Jobs.map((job) => (
                  <div key={job.id} className="bg-gray-900/40 border border-gray-700 p-6 rounded-2xl hover:border-prim transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-14 w-14 rounded-xl overflow-hidden relative border border-gray-700">
                        <Image src={job.image} alt={job.title} fill className="object-cover" />
                      </div>
                      <span className="bg-prim/20 text-prim px-3 py-1 rounded-full text-xs font-semibold">{job.tag}</span>
                    </div>
                    <h3 className="Unbounded text-lg font-bold text-white mb-1 group-hover:text-prim transition-colors">{job.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                      <i className="bi bi-building"></i> {job.title}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <i className="bi bi-geo-alt text-prim"></i> {job.location}
                      </span>
                      <span className="text-white font-bold">{job.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "recruters" && (
            <div className="max-w-[1600px] mx-auto pb-10">
              <h2 className='Unbounded text-2xl lg:text-3xl font-bold mb-6'>Recruters</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {Recruters.map((recruter) => (
                  <div key={recruter.id} className="bg-gray-900/40 border border-gray-700 p-6 rounded-2xl hover:bg-gray-800/50 transition-all text-center">
                    <div className="h-20 w-20 rounded-2xl overflow-hidden relative border-2 border-gray-700 mx-auto mb-4">
                      <Image src={recruter.image} alt={recruter.name} fill className="object-cover" />
                    </div>
                    <h3 className="Unbounded text-lg font-bold text-white mb-1">{recruter.name}</h3>
                    <p className="text-gray-400 text-sm mb-3 flex items-center justify-center gap-1">
                      <i className="bi bi-geo-alt text-prim"></i> {recruter.location}
                    </p>
                    <div className="bg-prim/10 text-prim py-1 px-4 rounded-full inline-block text-sm font-semibold">
                      {recruter.jobs}
                    </div>
                    <p className="text-gray-500 text-xs mt-4 line-clamp-2">{recruter.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "candidates" && (
            <div className="max-w-[1600px] mx-auto pb-10">
              <h2 className='Unbounded text-2xl lg:text-3xl font-bold mb-6'>All Candidates</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
                {Candidates.map((candidate) => (
                  <div key={candidate.id} className="bg-gray-900/40 border border-gray-700 p-6 rounded-2xl hover:border-prim transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full overflow-hidden relative border-2 border-gray-700 group-hover:border-prim transition-all">
                        <Image src={candidate.image} alt={candidate.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="Unbounded text-lg font-bold text-white">{candidate.name}</h3>
                        <p className="text-prim text-xs font-semibold">{candidate.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {candidate.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-[10px] uppercase tracking-wider font-bold">
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 3 && <span className="text-gray-500 text-[10px] flex items-center">+{candidate.skills.length - 3} more</span>}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <i className="bi bi-geo-alt text-prim"></i> {candidate.location}
                      </span>
                      <button className="text-prim hover:text-white transition-colors text-sm font-bold flex items-center gap-2">
                        View Profile <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Main

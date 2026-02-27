"use client"

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react"
import jobsData from "@/app/JsonData/Jobs.json"



type Job = {
  id: string;
  image: string;
  title: string;
  name: string;
  location: string;
  tag: string;
  days: string;
  price: string;
}

const Jobs = () => {

  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData);
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const [showKeywordSection, setShowKeywordSection] = useState<boolean>(false);
  const [showDateSection, setShowDateSection] = useState<boolean>(false);
  const [showTagSection, setShowTagSection] = useState<boolean>(false);

  const filterJobs = (
    updatedKeyword: string,
    updatedLocation: string,
    updatedTag: string,
    updatedDate: string,
  ): void => {
    // 1. Crea una copia superficial (shallow copy) de los datos originales para no mutar 'jobsData' directamente.
    let filtered = [...jobsData];

    // 2. Filtro por Palabra Clave (Keyword)
    if (updatedKeyword.trim() !== "") {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(updatedKeyword.toLowerCase()) || // Convierte a minúsculas para búsqueda insensible a mayúsculas (case-insensitive).
          job.name.toLowerCase().includes(updatedKeyword.toLowerCase())
      );
    }

    // 3. Filtro por Ubicación (Location)
    if (updatedLocation.trim() !== "") {
      filtered = filtered.filter(
        // Filtra trabajos cuya ubicación contenga el texto ingresado.
        (job) => job.location.toLowerCase().includes(updatedLocation.toLowerCase())
      );
    }

    // 4. Filtro por Etiqueta (Tag)
    if (updatedTag !== "") {
      filtered = filtered.filter(
        // Filtra trabajos que contengan la etiqueta seleccionada.
        (job) => job.tag.toLowerCase().includes(updatedTag.toLowerCase())
      );
    }

    // 5. Filtro por Fecha (Date)
    if (updatedDate !== "All") { // Si la opción no es "All" (Todos), aplica el filtro.
      filtered = filtered.filter((job) => job.days === updatedDate); // Filtra por coincidencia exacta en el campo 'days'.
    }

    // 6. Ordenamiento (Sorting)
    // Utiliza la variable de estado 'sortOrder' (que está fuera del scope de los argumentos de esta función).
    if (sortOrder === "newest") {
      // Ordena comparando cadenas (lexicográficamente) de forma ascendente.
      filtered.sort((a, b) => a.days.localeCompare(b.days));
    } else if (sortOrder === "oldest") {
      // Ordena comparando cadenas de forma descendente.
      filtered.sort((a, b) => b.days.localeCompare(a.days));
    }

    // 7. Actualización de Estado
    // Guarda el array resultante en el estado del componente para renderizar la lista filtrada.
    setFilteredJobs(filtered);
  }



  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const order = e.target.value;
    setSortOrder(order);

    let sorted = [...filteredJobs];
    if (order === "Newest") {
      sorted.sort((a, b) => a.days.localeCompare(b.days));
    } else if (order === "Oldest") {
      sorted.sort((a, b) => b.days.localeCompare(a.days));
    }

    setFilteredJobs(sorted);
  }

  const handleReset = (): void => {
    setKeyword("");
    setLocation("");
    setDateFilter("All");
    setSelectedTag("");
    setSortOrder("");
    setFilteredJobs(jobsData);
  }


  return (
    <>
      <div className="section-banner px-[8%] lg:px-[16%] h-[350px] relative w-full flex flex-col justify-center items-center mt-20">
        <h2 className="Unbounded text-4xl mb-3">
          Find Jobs
        </h2>

        <p className="text-gray-400">
          Search your career opportunity jobs
        </p>
      </div>

      <div className="px-[8%] lg:px-[16%] py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <h2 className="text-xl font-semibold">
              Show {filteredJobs.length} Jobs
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="bg-green-500 text-white rounded-md font-bold px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              Reset
            </button>

            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="bg-white text-black appearance-none px-5 py-2 rounded-md"
            >
              <option value="">Sort By</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>

            <button
              onClick={handleReset}
              className="bg-prim text-white rounded-md font-bold px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              All
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-5 mb-10">
          <div className="w-full md:w-1/2 flex flex-col gap-3 md:sticky top-22 left-0 h-full">
            <div className="shadow-light rounded-2xl p-4">
              <button
                onClick={() => setShowKeywordSection(!showKeywordSection)}
                className="flex justify-between items-center w-full text-left text-gray-300 Unbounded mb-2"
              >
                <span>Search Filter</span>
                <i className={`bi ${showKeywordSection ? "bi-chevron-up" : "bi-chevron-down"} text-white`}></i>
              </button>

              {showKeywordSection && (
                <div className="transition-all duration-300 overflow-hidden">
                  <div className="my-5">
                    <h2 className="Unbounded text-gray-300 mb-2">
                      Search By Keywords
                    </h2>

                    <input
                      type="text"
                      value={keyword}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value
                        setKeyword(value)
                        filterJobs(value, location, dateFilter, selectedTag)
                      }}
                      placeholder="Job Title, Keyword"
                      className="w-full px-2 py-2 bg-gray-500/20 border text-white border-gray-500 rounded-md"
                    />
                  </div>

                  <div className="my-8">
                    <h2 className="Unbounded text-gray-300 mb-2">
                      Location
                    </h2>

                    <input
                      type="text"
                      value={location}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value
                        setLocation(value)
                        filterJobs(keyword, value, dateFilter, selectedTag)
                      }}
                      placeholder="Search By Location"
                      className="w-full px-2 py-2 bg-gray-500/20 border text-white border-gray-500 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="shadow-light rounded-2xl p-4 mt-4">
              <button
                onClick={() => setShowDateSection(!showDateSection)}
                className="flex justify-between items-center w-full text-left text-gray-300 Unbounded mb-2"
              >
                <span>Date Posted</span>
                <i className={`bi ${showDateSection ? "bi-chevron-up" : "bi-chevron-down"} text-white`}></i>
              </button>

              {showDateSection && (
                <div className="my-5">
                  <div className="flex flex-col gap-2 Unbounded font-light">
                    {[
                      "All",
                      "Last Hour",
                      "Last 24 Hour",
                      "Last 7 Days",
                      "Last 14 Days",
                      "Last 30 Days"
                    ].map((date) => (
                      <label key={date} className="cursor-pointer">
                        <input
                          type="radio"
                          name="timeFilter"
                          checked={dateFilter === date}
                          onChange={() => {
                            setDateFilter(date)
                            filterJobs(keyword, location, date, selectedTag)
                          }}
                        />
                        <span className="ps-2">{date}</span>
                      </label>
                    ))}


                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Jobs

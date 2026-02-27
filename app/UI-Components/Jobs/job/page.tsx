"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
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
          </div>
        </div>
      </div>
    </>

  )
}

export default Jobs

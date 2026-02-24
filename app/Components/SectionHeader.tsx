import Link from "next/link"

type Props = {
  title: string
  text: string
  linkText: string
  linkHref?: string
}

export const SectionHeader = ({ title, text, linkText, linkHref = "/UI-Components/Jobs" }: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5">
      <div className="w-full lg:w-1/2">
        <div className="title">
          <h2 className="Unbounded text-4xl">{title}</h2>

          <p className="text-gray-400 mt-2">
            {text}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-start md:justify-end">
        <Link href={linkHref} className="flex items-center gap-2">
          <span className="px-3 py-2 border border-gray-400 rounded-md hover:bg-prim hover:shadow-light hover:border-transparent transition-all duration-300">
            {linkText}
          </span>
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}
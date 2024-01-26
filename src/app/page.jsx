"use client"

import styles from "@/styles/page.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { searchGray } from "../../public/svgs"

export default function Home() {
  const [name, setName] = useState("")
  const [search, setSearchs] = useState()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setSearchs(
        localStorage.getItem("searchHistory")
          ? JSON.parse(localStorage.getItem("searchHistory"))
          : []
      )
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name != null && name.length !== 0) {
      console.log(name)
      router.push(`/movie/${name}`)
    }
  }
  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Search for a movie"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{searchGray}</button>
      </form>
      {search?.length > 0 && (
        <div className={styles.lastResults}>
          <p>Search history</p>
          {search.map((result) => {
            return (
              <Link href={`movie/${result}`}>
                {result.replace(/%20/g, " ")}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

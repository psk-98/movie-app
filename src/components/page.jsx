"use client"

import styles from "@/styles/page.module.css"
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
    // if (typeof window !== "undefined" && window.localStorage) {
    //   if (localStorage.getItem("searchHistory")) {
    //     let temp = JSON.parse(localStorage.getItem("searchHistory"))
    //     // console.log(temp)
    //     if (temp.length >= 5) {
    //       console.log("full")
    //       // temp = [name, ...temp]

    //       let temp2 = temp.slice(0, 4)
    //       temp2 = [name, ...temp2]
    //       localStorage.setItem("searchHistory", JSON.stringify(temp2))
    //     } else {
    //       temp = [name, ...temp]
    //       localStorage.setItem("searchHistory", JSON.stringify(temp))
    //     }
    //   } else {
    //     let temp = [name]
    //     localStorage.setItem("searchHistory", JSON.stringify(temp))
    //   }
    // }
  }
  return (
    <div className={styles.searchWrapper}>
      {console.log(search)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Search for a movie"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{searchGray}</button>
      </form>
      {search && (
        <div className={styles.lastResults}>
          <p>Last 5 searchs</p>
          {search.map((result) => {
            return <p>{result}</p>
          })}
        </div>
      )}
    </div>
  )
}

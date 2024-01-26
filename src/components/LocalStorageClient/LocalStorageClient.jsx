"use client"

import { useEffect } from "react"

export default function LocalStorageClient({ name }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (localStorage.getItem("searchHistory")) {
        let temp = JSON.parse(localStorage.getItem("searchHistory"))

        if (temp.length > 4) {
          let temp2 = temp.slice(0, 4)
          temp2 = [name, ...temp2]
          localStorage.setItem("searchHistory", JSON.stringify(temp2))
        } else {
          temp = [name, ...temp]
          localStorage.setItem("searchHistory", JSON.stringify(temp))
        }
      } else {
        let temp = [name]
        localStorage.setItem("searchHistory", JSON.stringify(temp))
      }
    }
  }, [name])
  return <></>
}

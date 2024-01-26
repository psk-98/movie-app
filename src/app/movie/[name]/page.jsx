import LocalStorageClient from "@/components/LocalStorageClient/LocalStorageClient"
import styles from "@/styles/page.module.css"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"
import { starSvg } from "../../../../public/svgs"

export default async function Movie({ params: { name } }) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${name}&apikey=${process.env.API_KEY}`
  )

  const data = await res.json()

  console.log(data)

  const {
    Title,
    Released,
    Runtime,
    Rated,
    imdbRating,
    imdbVotes,
    Plot,
    Genre,
    Poster,
    Response,
  } = await data

  return Response === "True" ? (
    <div className={styles.detailsWrapper}>
      <LocalStorageClient name={name} />
      <Link className={styles.searchIcon} href="/">
        {"<<"} Back to search
      </Link>
      <div className={styles.top}>
        <p className={styles.title}>{Title}</p>
        <div className={styles.coverImg}>
          <Image
            src={Poster}
            width={1440}
            height={1440}
            alt={`${name} cover`}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.poster}>
          <Image
            src={Poster}
            width={1440}
            height={1440}
            alt={`${name} cover`}
          />
        </div>
        <div className={styles.details}>
          <p className={styles.plot}>{Plot}</p>

          <p className={styles.rating}>
            <span>
              {starSvg} {imdbRating}
            </span>
            {numeral(imdbVotes).format("0.00a")} reviews
          </p>
          <p className={styles.rated}>
            <span className={styles.header}>Rated</span>
            {Rated}
          </p>
          <p className={styles.released}>
            <span className={styles.header}>Release Date</span>
            {Released}
          </p>

          <p className={styles.runtime}>
            <span className={styles.header}>Runtime</span>
            {Runtime}
          </p>
          <p className={styles.genre}>
            <span className={styles.header}>Genres</span>
            {Genre}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.error}>
      <p>{data?.Error}</p>
      <Link href="/">back to search</Link>
    </div>
  )
}

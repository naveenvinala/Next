import Image from "next/image";
import styles from "./Movie.module.scss";
type Movies = {
  popularity: string;
  overview: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
};
const Movies = ({
  title,
  poster_path,
  backdrop_path,
  popularity,
  overview,
}: Movies) => {
  const Imagepath = `https://image.tmdb.org/t/p/original${poster_path}`;
  console.log("Imagepath", Imagepath, poster_path);
  return (
    <div className={styles.movie}>
      <div className={styles.polaroid}>
        <h2>{title}</h2>
        <Image
          className={styles.image}
          src={Imagepath}
          alt={title}
          width={30}
          height={20}
        />
        <span>popularity: {popularity}</span>
      </div>
    </div>
  );
};

export default Movies;

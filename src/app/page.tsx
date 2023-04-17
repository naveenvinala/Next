import Movies from "@/components/Movies/Movies";

export default async function Home() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await response.json();
  //console.log("result", res);
  return (
    <>
      {res.results.map((movie: any) => (
        <Movies
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          popularity={movie.popularity}
          backdrop_path={movie.backdrop_path}
        />
      ))}
    </>
  );
}

import Image from "next/image";

function Thumbnail({ result }) {
  console.log(result);
  const BASE_URL = "https://image.tdmb.org/t/p/original/";
  return (
    <div>
      <Image
        layout="responsive"
        alt="Poster"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster.poster_path}`
        }
      />
    </div>
  );
}

export default Thumbnail;

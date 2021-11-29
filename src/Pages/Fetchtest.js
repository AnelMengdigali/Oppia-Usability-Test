
import useFetch from "../Helpers/useFetch";

function Fetchtest() {
  const { data: joke, loading, error, refetch } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div>
      <h1>
        {joke?.setup} : {joke?.delivery}
      </h1>

      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default Fetchtest;
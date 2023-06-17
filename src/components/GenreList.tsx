import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((val) => (
        <li key={val.id}>{val.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

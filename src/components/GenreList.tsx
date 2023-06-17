import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((val) => (
        <li key={val.id}>{val.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

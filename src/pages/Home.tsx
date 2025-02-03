import { useGetAllCharactersQuery } from '../store/API/CharactersAPI';
import Card from '../components/Card';
import { Character } from '../types/Character';

const Home = () => {
  const { data, isLoading, error } = useGetAllCharactersQuery({ page: 1 });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Characters</h1>
      <div className="characters-grid">
        {data?.results.map((char: Character) => (
          <Card key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;

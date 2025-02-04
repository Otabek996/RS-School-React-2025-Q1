import { useState } from 'react';
import { useGetAllCharactersQuery } from '../store/API/CharactersAPI';
import Card from '../components/Card';
import PaginationComponent from '../components/PaginationComponent';
import { Character } from '../types/Character';
import { Grid } from '@mui/material';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetAllCharactersQuery({ page });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Characters</h1>
      <Grid className="characters-grid" container spacing={1} rowSpacing={3}>
        {data?.results.map((char: Character) => (
          <Grid key={char.id} item xs={3}>
            <Card character={char} />
          </Grid>
        ))}
      </Grid>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <PaginationComponent
          page={page}
          setPage={setPage}
          totalPages={data?.info.pages || 1}
        />
      </div>
    </div>
  );
};

export default Home;

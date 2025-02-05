import { useState } from 'react';
import { useGetAllCharactersQuery } from '../store/API/CharactersAPI';
import Card from '../components/Card';
import ModalWindow from '../components/ModalWindow';
import PaginationComponent from '../components/PaginationComponent';
import { Character } from '../types/Character';
import { Grid, CircularProgress, Box } from '@mui/material';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetAllCharactersQuery({ page });
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null
  );

  if (isLoading)
    return (
      <Box
        sx={{
          width: '100vh',
          height: '100%',
          display: 'flex',
          margin: 'auto',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Characters</h1>
      <Grid className="characters-grid" container spacing={1} rowSpacing={3}>
        {data?.results.map((char: Character) => (
          <Grid
            key={char.id}
            item
            xs={3}
            onClick={() => setSelectedCharacterId(char.id)}
          >
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

      <ModalWindow
        open={!!selectedCharacterId}
        handleClose={() => setSelectedCharacterId(null)}
        characterId={selectedCharacterId}
      />
    </div>
  );
};

export default Home;

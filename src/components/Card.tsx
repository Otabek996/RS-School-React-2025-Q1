import React from 'react';
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
} from '@mui/material';

interface CharacterProps {
  character: {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
  };
}

const Card: React.FC<CharacterProps> = ({ character }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'success';
      case 'Dead':
        return 'error';
      case 'Unknown':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <MUICard
      sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}
      style={{ cursor: 'pointer' }}
    >
      <CardMedia
        component="img"
        height="300"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {character.name}
        </Typography>
        <Typography color="text.secondary">{character.species}</Typography>
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <Stack direction="row" spacing={1}>
            <Chip
              label={character.status}
              color={getStatusColor(character.status)}
            />
          </Stack>
        </Stack>
      </CardContent>
    </MUICard>
  );
};

export default Card;

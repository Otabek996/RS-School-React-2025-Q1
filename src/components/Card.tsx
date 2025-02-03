import React from 'react';
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
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
  return (
    <MUICard sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
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
        <Typography color="text.secondary">
          {character.species} - {character.status}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;

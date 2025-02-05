import { getStatusColor } from '../utils/statusColor';
import {
  Modal,
  Box,
  Typography,
  CircularProgress,
  Stack,
  Chip,
} from '@mui/material';
import { useGetCharacterByIdQuery } from '../store/API/CharactersAPI';

interface ModalWindowProps {
  open: boolean;
  handleClose: () => void;
  characterId: number | null;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  open,
  handleClose,
  characterId,
}) => {
  const { data: character, isLoading } = useGetCharacterByIdQuery(
    characterId ?? 0,
    { skip: !characterId }
  );

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          character && (
            <>
              <Stack>
                <Stack direction="row" spacing={2}>
                  <Typography variant="h6">{character?.name}</Typography>
                  <Chip
                    label={character.status}
                    color={getStatusColor(character.status)}
                    sx={{ textTransform: 'capitalize' }}
                  />
                </Stack>
              </Stack>
              <img
                src={character?.image}
                alt={character?.name}
                style={{
                  width: '100%',
                  borderRadius: '15px',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              />
              <Typography>Species: {character?.species}</Typography>
              <Typography>Gender: {character?.gender}</Typography>
              <Typography>Origin: {character?.origin?.name}</Typography>
              <Typography>Location: {character?.location?.name}</Typography>
              <Typography>
                Created:{' '}
                {character?.created
                  ? new Date(character?.created).toLocaleDateString()
                  : 'Unknown'}
              </Typography>
            </>
          )
        )}
      </Box>
    </Modal>
  );
};

export default ModalWindow;

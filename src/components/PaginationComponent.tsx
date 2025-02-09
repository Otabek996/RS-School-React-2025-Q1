import { useEffect } from 'react';
import { Pagination } from '@mui/material';

interface PaginationComponentProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const PaginationComponent = ({
  page,
  setPage,
  totalPages,
}: PaginationComponentProps) => {
  useEffect(() => {
    console.log('Current Page:', page);
  }, [page]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationComponent;

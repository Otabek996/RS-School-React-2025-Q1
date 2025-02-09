export const getStatusColor = (status: string) => {
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

import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { nanoid } from 'nanoid';

export default function SkeletonComponent() {
  return (
    <Box
      sx={{
        // bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        gap: '5px',
        justifyContent: 'center',
      }}
    >
      {
        [1,2,3,4,5,6,7,8].map(item => <Skeleton
          key={nanoid()}
          sx={{ bgcolor: 'grey.900' }}
          variant="rectangular"
          width={210}
          height={118}
        />)
      }
    </Box>
  );
}

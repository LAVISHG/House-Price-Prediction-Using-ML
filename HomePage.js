import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';
import image from './assets/bg2.avif';

function HomePage() {
  const TEXTS = [
    'Unlock the future of Real Estate!',
    "Predict your Home's price with confidence!",
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
          mb: 4,
        }}
      >
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/price-calculator"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          px: 4,
          py: 1.5,
          fontSize: '1rem',
          borderRadius: '8px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'gray',
          },
        }}
      >
        Start here
      </Button>
    </Box>
  );
}

export default HomePage;

import React from 'react';
import { Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Router from 'next/router';
import Presentation from '@/layouts/Presentation';
export default function ServerError() {
  return (
    <Presentation title={'liismaiil page note found'}>
      <Grid
        onClick={() => Router.push('/')}
        container
        xs={12}
        style={{
          height: '60vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          style={{
            display: 'inline-block',
            backgroundImage: `url("assets/error.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '40vh',
            height: '40vh',
          }}
        >
          <Image src={'/assets/error.png'} alt="error Image with baloon" width={300} height={300} />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: '28px', color: '#a00' }}>Server Error</Typography>
        </Grid>
      </Grid>
    </Presentation>
  );
}

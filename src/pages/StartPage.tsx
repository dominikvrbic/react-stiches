import React from 'react';
import { Title, Grid } from '@modulz/design-system';

export const StartPage = (): JSX.Element => {
  return (
    <Grid>
      <Title css={{ gridColumn: 'span 12', textAlign: 'center' }}>
        StartPage
      </Title>
    </Grid>
  );
};

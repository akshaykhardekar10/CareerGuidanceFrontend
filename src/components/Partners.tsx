import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const PartnerLogo = styled('img')({
  width: '100%',
  maxHeight: '60px',
  objectFit: 'contain',
  filter: 'grayscale(100%)',
  opacity: 0.7,
  transition: 'all 0.3s ease',
  '&:hover': {
    filter: 'grayscale(0%)',
    opacity: 1,
  },
});

const partners = [
  {
    name: "Southeastern Louisiana University",
    logo: "/southeastern-logo.png"
  },
  {
    name: "Los Angeles Pierce College",
    logo: "/pierce-college-logo.png"
  },
  {
    name: "UMass Dartmouth",
    logo: "/umass-logo.png"
  },
  {
    name: "Tulane University",
    logo: "/tulane-logo.png"
  },
  {
    name: "UCI",
    logo: "/uci-logo.png"
  },
  {
    name: "Clemson",
    logo: "/clemson-logo.png"
  },
  {
    name: "Brock University",
    logo: "/brock-logo.png"
  },
  {
    name: "Old Dominion University",
    logo: "/old-dominion-logo.png"
  }
];

const Partners = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {partners.map((partner, index) => (
            <Grid item xs={6} sm={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PartnerLogo
                src={partner.logo}
                alt={partner.name}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners; 
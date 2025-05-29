import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  position: 'relative',
  overflow: 'visible',
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: -20,
  left: 20,
  color: theme.palette.primary.main,
  fontSize: 40,
  transform: 'rotate(180deg)',
  backgroundColor: '#fff',
  borderRadius: '50%',
  padding: 8,
}));

const testimonials = [
  {
    quote: "When we showed instructors and faculty the features in YuJa, it was like Christmas came early. They were thrilled.",
    institution: "Motlow State",
    image: "/motlow-state-logo.png"
  },
  {
    quote: "Accessibility, the ability to attach supplementary resources, the addition of indexes and the ability to embed videos.",
    institution: "University of Calgary",
    image: "/calgary-logo.png"
  }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <TestimonialCard>
                <QuoteIcon />
                <CardContent sx={{ pt: 4 }}>
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                    {testimonial.quote}
                  </Typography>
                  <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.institution}
                      style={{ height: 40, objectFit: 'contain' }}
                    />
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials; 
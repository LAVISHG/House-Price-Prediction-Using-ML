import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import image from './assets/bg2.avif';

const cities = [
  '', 'Shoreline', 'Seattle', 'Kent', 'Bellevue', 'Redmond', 'Maple Valley',
  'North Bend', 'Lake Forest Park', 'Sammamish', 'Auburn', 'Des Moines',
  'Bothell', 'Federal Way', 'Kirkland', 'Issaquah', 'Woodinville',
  'Normandy Park', 'Fall City', 'Renton', 'Carnation', 'Snoqualmie', 'Duvall',
  'Burien', 'Covington', 'Inglewood-Finn Hill', 'Kenmore', 'Newcastle',
  'Mercer Island', 'Black Diamond', 'Ravensdale', 'Clyde Hill', 'Algona',
  'Skykomish', 'Tukwila', 'Vashon', 'Yarrow Point', 'SeaTac', 'Medina',
  'Enumclaw', 'Snoqualmie Pass', 'Pacific', 'Beaux Arts Village', 'Preston', 'Milton'
];

const styles = {
  page: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '95%',
    width: '100%',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(8px)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark overlay for better contrast
  },
  heading: {
    color: '#ffffff',
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
  },
  formContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background for contrast
    padding: '20px',
    borderRadius: '10px'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: '180px',
    height: '56px',
    marginTop: '20px',
    '&:hover': { backgroundColor: 'gray' },
  },
  textField: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '5px',
  },

  
  totalCost: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '20px'
  }
};

const inputFields = [
  { name: 'bedrooms', label: 'Number of Bedrooms' },
  { name: 'sqft_living', label: 'Sqft Living' },
  { name: 'sqft_lot', label: 'Sqft Lot' },
  { name: 'floors', label: 'Floors' },
  { name: 'condition', label: 'Condition' },
  { name: 'sqft_above', label: 'Sqft Above' },
  { name: 'sqft_basement', label: 'Sqft Basement' },
  { name: 'yr_built', label: 'Year Built' },
  { name: 'yr_renovated', label: 'Year Renovated' },
];

function PriceCalculatorPage() {
  const [formData, setFormData] = useState({
    bedrooms: '',
    sqft_living: '',
    sqft_lot: '',
    floors: '',
    condition: '',
    sqft_above: '',
    sqft_basement: '',
    yr_built: '',
    yr_renovated: '',
    city: '',
  });

  const [price, setPrice] = useState(0.0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        const data = await response.json();
        setPrice(data);
      } else {
        console.error('Prediction failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>House Price Prediction</h2>
        <form onSubmit={handleSubmit} style={styles.formContainer}>
          {inputFields.map((field) => (
            <TextField
              key={field.name}
              type="text"
              name={field.name}
              label={field.label}
              variant="outlined"
              color="secondary"
              value={formData[field.name]}
              onChange={handleChange}
              fullWidth
              required
              style={styles.textField}
            />
          ))}
          <TextField
            select
            name="city"
            label="City"
            variant="outlined"
            color="secondary"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            required
            SelectProps={{ native: true }}
            style={styles.textField}
          >
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </TextField>
        </form>
        <Button type="submit" variant="contained" style={styles.button} onClick={handleSubmit}>
          Calculate
        </Button>
        <h2 style={styles.totalCost}>Total Cost: {price}</h2>
      </div>
    </div>
  );
}

export default PriceCalculatorPage;
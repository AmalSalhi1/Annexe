import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Annexe.css';

export default function Annexe() {
  const [etablissement, setEtablissement] = useState('');
  const [departement, setDepartement] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [grade, setGrade] = useState('');
  const [echelon, setEchelon] = useState('');

  const handleEtablissementChange = (event) => {
    setEtablissement(event.target.value);
  };

  const handleDepartementChange = (event) => {
    setDepartement(event.target.value);
  };

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleEchelonChange = (event) => {
    setEchelon(event.target.value);
  };

  return (
    <div className="professor-form-container">
      <Grid container className='grid_container' justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper className="professional-info">
            <FormLabel component="legend" className="text">
              Annexe2
              <div className="underline"></div>
            </FormLabel>
            <TextField 
              id="nom" 
              label="Nom" 
              variant="outlined" 
              fullWidth 
              className="input-field" 
              value={nom}
              onChange={handleNomChange}
            />
            <TextField 
              id="prenom" 
              label="Prénom" 
              variant="outlined" 
              fullWidth 
              className="input-field" 
              value={prenom}
              onChange={handlePrenomChange}
            />
            <TextField 
              id="grade" 
              label="Grade" 
              variant="outlined" 
              fullWidth 
              className="input-field" 
              value={grade}
              onChange={handleGradeChange}
            />
            <TextField 
              id="echelon" 
              label="Échelon" 
              variant="outlined" 
              fullWidth 
              className="input-field" 
              value={echelon}
              onChange={handleEchelonChange}
            />
            <TextField
              id="etablissement"
              select
              label="Choisir Établissement"
              variant="outlined"
              fullWidth
              value={etablissement}
              onChange={handleEtablissementChange}
              className="input-field"
            >
              <MenuItem value="ensa">Ensa</MenuItem>
              <MenuItem value="est">Est</MenuItem>
              <MenuItem value="faculteDeSciences">Faculté de Sciences</MenuItem>
            </TextField>
            <TextField
              id="departement"
              select
              label="Choisir Département"
              variant="outlined"
              fullWidth
              value={departement}
              onChange={handleDepartementChange}
              className="input-field"
            >
              <MenuItem value="electroniqueInformatiqueTelecom">Électronique Informatique et Télécommunications</MenuItem>
              <MenuItem value="mecaniqueMathematiqueAppliquee">Mécanique et Mathématique Appliquée</MenuItem>
              <MenuItem value="humanitesManagement">Humanités et Management</MenuItem>
            </TextField>
          </Paper>
        </Grid>
      </Grid>
      {/* Bouton de validation */}
      <div className='bottom-button'>
        <Button variant="contained" className="validate-button">
          Valider
        </Button>
      </div>
    </div>
  );
}

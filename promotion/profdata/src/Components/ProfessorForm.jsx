import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import './ProfessorForm.css';

export default function ProfessorForm() {
  const [civilite, setCivilite] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [doctorateType, setDoctorateType] = useState(''); 

  const handleCiviliteChange = (event) => {
    setCivilite(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleDoctorateTypeChange = (event) => { // Gestionnaire pour le changement de type de doctorat
    setDoctorateType(event.target.value);
  };
  return (
    <div className="professor-form-container">
      <Grid container className='grid_container' spacing={2} direction="row">
        <Grid item xs={6} md={4}>
          <Paper className="personal-info">
            <FormLabel component="legend" className="text">Informations Personnelles
            <div className="underline"></div></FormLabel>
            
         
            <TextField
              id="civilite"
              select
              label="Civilité"
              variant="outlined"
              fullWidth
              value={civilite}
              onChange={handleCiviliteChange}
              className="input-field"
            >
              <MenuItem value="Mme">Mme</MenuItem>
              <MenuItem value="Msr">Msr</MenuItem>
            </TextField>
            <TextField id="prenom" label="Prénom" variant="outlined" fullWidth className="input-field" />
            <TextField id="nom" label="Nom" variant="outlined" fullWidth className="input-field" />
            <TextField id="cne" label="CNE" variant="outlined" fullWidth className="input-field" />
            <TextField
              id="dateNaissance"
              label="Date de Naissance"
              type="date"
              variant="outlined"
              fullWidth
              value={selectedDate}
              onChange={handleDateChange}
              className="input-field"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField id="email" label="Email" variant="outlined" fullWidth className="input-field" />
            <TextField id="tel" label="Téléphone" variant="outlined" fullWidth className="input-field" />
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper className="professional-info">
            <FormLabel component="legend" className="text">Informations Professionnelles
            
            <div className="underline"></div></FormLabel>
            
            <TextField id="grade" label="Grade" variant="outlined" fullWidth className="input-field" />
            <TextField id="drpp" label="DRPP" variant="outlined" fullWidth className="input-field" />
            <TextField
              id="profil"
              select
              label="Choisir un Profil"
              variant="outlined"
              fullWidth
              className="input-field"
            >
              <MenuItem value="prof1">Profil 1</MenuItem>
              <MenuItem value="prof2">Profil 2</MenuItem>
            </TextField>
            <TextField
              id="specialite"
              select
              label="Choisir Spécialité"
              variant="outlined"
              fullWidth
              className="input-field"
            >
              <MenuItem value="spec1">Spécialité 1</MenuItem>
              <MenuItem value="spec2">Spécialité 2</MenuItem>
            </TextField>
            <TextField
              id="etablissement"
              select
              label="Choisir Etablissement"
              variant="outlined"
              fullWidth
              className="input-field"
            >
              <MenuItem value="etab1">Ensa</MenuItem>
              <MenuItem value="etab2">Est</MenuItem>
            </TextField>
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper className="upload-container">
            <FormLabel component="legend" className="text"> Télécharger Documents
                    
            <div className="underline"></div></FormLabel>
    
            <div className="upload-button-container">
              <div className="label-container">
                <label htmlFor="uploadDemande" className="label">Demande de Candidature(Fomat pdf):</label>
              </div>
              <div className="button-container">
                <Button variant="contained" component="label" className="upload-button">
                Parcourir
                  <input id="uploadDemande" type="file" hidden />
                </Button>
              </div>
            </div>
            <div className="upload-button-container">
              <div className="label-container">
                <label htmlFor="uploadDemande" className="label">Curriculum Vitae(CV)(Fomat pdf):</label>
              </div>
              <div className="button-container">
                <Button variant="contained" component="label" className="upload-button">
                Parcourir
                  <input id="uploadCurriculum" type="file" hidden />
                </Button>
              </div>
            </div>
            <div className="upload-button-container">
              <FormLabel htmlFor="doctorateType" className="label">Type du Doctorat</FormLabel>
              <Select // Champs de sélection pour le type de doctorat
                id="doctorateType"
                variant="outlined"
                fullWidth
                value={doctorateType}
                onChange={handleDoctorateTypeChange}
                className="input-field select"
              >
                <MenuItem value="etranger">Étranger</MenuItem>
                <MenuItem value="national">National</MenuItem>
              </Select>
            </div>
            <div className="upload-button-container">
              <div className="label-container">
                <label htmlFor="uploadEquivalence" className="label">Equivalence (Bulletin Officiel)(png/jpeg):</label>
              </div>
              <div className="button-container">
                <Button variant="contained" component="label" className="upload-button">
                Parcourir
                  <input id="uploadEquivalence" type="file" hidden />
                </Button>
              </div>
            </div>
            <div className="upload-button-container">
              <div className="label-container">
                <label htmlFor="uploadDiplomeDoctorat" className="label">Diplome de Doctorat:</label>
              </div>
              <div className="button-container">
                <Button variant="contained" component="label" className="upload-button">
                Parcourir
                  <input id="uploadDiplomeDoctorat" type="file" hidden />
                </Button>
              </div>
            </div>
            <div className="upload-button-container">
              <div className="label-container">
                <label htmlFor="uploadDiplomeHabilitation" className="label">Diplome d'Habilitation -1 (Format pdf):</label>
              </div>
              <div className="button-container">
                <Button variant="contained" component="label" className="upload-button">
                Parcourir
                  <input id="uploadDiplomeHabilitation" type="file" hidden />
                </Button>
              </div>
            </div>
            <div className="upload-button-container">
              <div className="label-container">
                <label htmlFor="uploadArretNomination" className="label"> Arret de  Nomination(PH) -2 (Format pdf):</label>
              </div>
              <div className="button-container">
                <Button variant="contained" component="label" className="upload-button">
                Parcourir
                  <input id="uploadArretNomination" type="file" hidden />
                </Button>
              </div>
            </div>
            <div className="upload-button-container">
              <div className="label-container">
                <label htmlFor="uploadAttestation" className="label">Attestation -3 (Format pdf):</label>
              </div>
              <div className="button-container">
                <Button variant="contained" component="label" className="upload-button">
                  Parcourir
                  <input id="uploadAttestation" type="file" hidden />
                </Button>
              </div>
            </div>
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
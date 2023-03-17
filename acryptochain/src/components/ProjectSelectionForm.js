/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function selectProject(selectedProject, handleProjectChange) {
  return <FormControl variant="outlined" sx={{ mb: 1, width: '100%' }}>
    <InputLabel id="key_selectedProject">Select a Project</InputLabel>
    <Select
      labelId="key_selectedProject"
      id="selectedProject"
      value={selectedProject}
      onChange={handleProjectChange}
      label="Select a Project"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={'LIQ'}>Liquidus</MenuItem>
      <MenuItem value={'ONI'}>Onino</MenuItem>
      {/* <MenuItem value={'pryz'}>Pryz</MenuItem> */}
    </Select>
  </FormControl>;
}

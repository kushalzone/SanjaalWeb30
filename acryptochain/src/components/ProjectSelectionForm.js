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
  return <FormControl variant="outlined" sx={{ mb: 1, minWidth: '50%' }}>
    <InputLabel id="key_selectedProject">Project</InputLabel>
    <Select
      labelId="key_selectedProject"
      id="selectedProject"
      value={selectedProject}
      onChange={handleProjectChange}
      label="Project"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={'liq'}>Liquidus</MenuItem>
      {/* <MenuItem value={'oni'}>Onino</MenuItem>
          <MenuItem value={'pryz'}>Pryz</MenuItem> */}
    </Select>
  </FormControl>;
}

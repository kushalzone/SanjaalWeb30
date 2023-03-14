import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ProjectSocials(projectMeta) {
    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                {/* <Typography gutterBottom variant="h5" component="div">
                    Project Socials
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                Project Socials: {projectMeta.socials.map((item, index) => {
                    return (
                        <span key={index}><a href={item.link} target='_blank' rel='noreferrer'>{item.name}</a>&nbsp;{' '}</span>
                    );
                })}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default ProjectSocials
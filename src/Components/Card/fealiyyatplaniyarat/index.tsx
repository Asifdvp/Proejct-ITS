import { Grid } from '@mui/material'
import React from 'react'
import RecipeReviewCard from '../index'
import './style.scss'
const Fealiyyatplaniyarat = () => {
    return (

        <RecipeReviewCard>
            <div style={{opacity:'50%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className='merkez1'>
                        Fəaliyyət planı yoxdur, yeni plan yarat
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <a href='https:/www.google.com' className='merkez merkez2'>Plan yarat</a>
                    </Grid>
                </Grid>
            </div>
        </RecipeReviewCard>
    )
}

export default Fealiyyatplaniyarat;

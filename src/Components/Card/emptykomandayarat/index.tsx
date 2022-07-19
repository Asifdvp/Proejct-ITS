import { Grid } from '@mui/material'
import React from 'react'
import RecipeReviewCard from '../index'
import './style.scss'
const Emptykomandayarat = () => {
    return (

        <RecipeReviewCard>
            <div style={{opacity:'50%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className='merkez1'>
                            Komanda yoxdur, yeni komanda yarat
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <a href='https:/www.google.com' className='merkez merkez2'>Komanda yarat</a>
                    </Grid>
                </Grid>
            </div>
        </RecipeReviewCard>
    )
}

export default Emptykomandayarat;

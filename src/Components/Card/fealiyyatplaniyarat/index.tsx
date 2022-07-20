import { Grid } from '@mui/material'
import React from 'react'
import CreatePlan from '../../Modals/CreatePlan/CreatePlan'
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
                    <div  className='merkez merkez2'>  <CreatePlan/></div>
                    </Grid>
                </Grid>
            </div>
        </RecipeReviewCard>
    )
}

export default Fealiyyatplaniyarat;

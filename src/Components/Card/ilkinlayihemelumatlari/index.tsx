import React from 'react'
import TextInput from '../../Inputs/TextInput';
import { Grid, Container } from '@mui/material';
import './style.scss';
import RecipeReviewCard from '../index';
// import Textarea from '../../Inputs/TextArea';
import TextArea from '../../Inputs/TextArea';
interface Props{
    title:string,
    buttonexist:any
}
const Ilkinlayihemelumatlari:React.FC<Props> = (props) => {
    return (

        <RecipeReviewCard basliq={props.title} buttonExist={props.buttonexist} >
            {/* <Container >     */}
                <div className='ilkinlayihe'>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextInput placeholder={'Dashboard Management Systems'} label={'Layihənin adı'} disAble={false} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput placeholder={'№122343244355'} label={'Layihənin kodu'} disAble={false} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput placeholder={'Department adı'} label={'Biznes tərəfdaşı'} disAble={false} />
                        </Grid>
                     
                        <Grid item xs={12}>
                            <TextArea placeholder={'Layihə üzrə qeydlər'} label={'Layihənin qısa izahı'} limit={Infinity} />
                      
                        </Grid>
                        
                    </Grid>
                </div>
            {/* </Container> */}
        </RecipeReviewCard>


    )
}
export default Ilkinlayihemelumatlari;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './index.scss';
import {Button} from '@mui/material';
import LayiheDetallariTable from '../Table/layiheDetallari';
import CreateTeamTable from '../Table/CreateTeam';
import AddButton from '../Buttons/AddButton';
import AddTextButton from '../Buttons/AddTextButton';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props{
    basliq:string,
    buttonExist?:any
}

const  RecipeReviewCard:React.FC<Props>=(props)=> {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width:'100%' }} square={true}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
        <AddTextButton/>
          </IconButton>
        }
        title={props.basliq}
      />
      <CardContent>
      <CreateTeamTable />
      </CardContent>
      
      
    </Card>
  );
}

export default RecipeReviewCard;
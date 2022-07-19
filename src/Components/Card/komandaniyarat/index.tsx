import React from 'react'
import Props from './props';
import RecipeReviewCard from '../index';
import CreateTeamTable from '../../Table/CreateTeam';

const KomandaniYaratCard:React.FC<Props> = (props) => {
  return (
    <div>
      <RecipeReviewCard basliq={props.title} buttonExist={props.buttonexist}>
        <CreateTeamTable />
      </RecipeReviewCard>
    </div>
  )
}

export default KomandaniYaratCard;

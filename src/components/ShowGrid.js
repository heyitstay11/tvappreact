import React from 'react'
import Show from './Show'
import Loader from './Loader'
import styled from 'styled-components';

const Grid = styled.div`
   min-height: 80vh;
   display: flex;
   flex-wrap: wrap;
   gap: 1.6rem;
   align-items: center;
   justify-content: center;
   margin: 2rem auto;
   align-items: baseline;
   margin-bottom: 0;
   padding-bottom:1.5rem ;
`;

const ShowGrid = ({items, loading}) => {
      return loading  ?  
         ( <Loader />)
         :
         (
            <Grid>
                { items.map(item => (
              <Show  key={item.show.id} {...item.show} />
                )) }
            </Grid>
           ) 
}

export default ShowGrid

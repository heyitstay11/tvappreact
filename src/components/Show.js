import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ShowCard = styled.div`
  min-width: 280px;
  width: 22%;
  background-color: rgba(6,24,68,0.85) ;
  color: whitesmoke ;
  font-size: 1.2rem;
  padding: 12px 8px;
  border-radius: 8px;
`;

const Show = ({id,status, name, image, network, officialSite, type, rating, genres}) => {
    return (
        <ShowCard className="show">
            <h3>{name}</h3>
            <Link to={'/show/'+id} ><img src={ image && image.medium ? image.medium: 'abcd'} height="180" width="150" alt="info"/></Link> <br />
           <div className="info">
           Network: <strong>{network ? network.name  :  'unknown'}</strong> <br />
            Type: <strong>{type}</strong><br/>
            Status: <strong>{status}</strong><br/>
            Rating: <strong>{rating.average ? rating.average : 'N/A'}</strong><br/>
            
          {genres.length ? 
          <>
                <h4>Genres</h4>
                <ul>
                {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
                </ul>
            </> : ''
          }  
            {officialSite && <a target='_blank' rel='noreferrer' href={officialSite}>Visit site</a>}
            </div> 
        </ShowCard>
    )
}

export default Show

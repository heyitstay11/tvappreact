import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from './Loader';
import styled from 'styled-components';

const ShowInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: 2rem auto;
    background-color:rgba(6,24,68,.85);
    color: whitesmoke;
    padding: 1rem;
    border-radius: 8px;
    
    @media screen and (max-width: 900px ){
        width: 90%;
        margin-top: 1rem;
    }
`;



const SingleShow = (props) => {
    let id =  props.match.params.id;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data =>{
            setData(data)
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    },[id])

   return loading ? (<Loader/>):(
    <>
    <ShowInfo className='single'>
    <Link className='back' to={'/'} >X</Link>
    <br/>
        <img src={data.image ? data.image.medium : 'abcd' } alt="single" height="350" width="280"/>
        <h1>{data.name}</h1>
        <div className="para" dangerouslySetInnerHTML={{__html: data.summary }} />
        <div className="info">
            Network: <strong>{data.network ? data.network.name  :  'unknown'}</strong> <br />
            Type: <strong>{data.type}</strong><br/>
            Status: <strong>{data.status}</strong><br/>
            Rating: <strong>{data.rating === null ? data.rating.average : 'N/A'}</strong><br/>
            {data.officialSite && <a target='_blank'  rel='noreferrer'  href={data.officialSite}>Visit site</a>}
        </div>
    </ShowInfo>
    </>
   ) 
}

export default SingleShow

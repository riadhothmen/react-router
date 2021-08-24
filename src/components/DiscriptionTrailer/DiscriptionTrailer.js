import React from 'react';
import {useHistory} from 'react-router-dom';

import  {Button} from 'react-bootstrap';


export default function DiscriptionTrailer({match ,res}) {
   
   const history = useHistory();
  
   const film = res.find(el => el.name == match.params.name)
  
   if(film)
    return (
        <div>
            <Button type="button" class="light"  onClick={() =>  history.push('/') }
            >  🠬 Back  </Button>

                    <h1  style={{textAlign: "center"}} >Description</h1>
            <h2 style={{textAlign: "center"}} >{film.description}</h2>
            <h1 style={{textAlign: "center"} }>Trailer</h1>
        <div style={{textAlign: "center"} }>
            <iframe  width="560" height="315" src={film.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         </div>

        </div>
    )
};
import '../stylesheets/Test.css';
import React from 'react';

function Test(props){
  return(
    <div className='container-test'>
      <img 
        className='image-test'
        src={require(`../images/${props.image}`)}
        alt={props.alt} />
      <div className='container-text-test'>
        <p className='name-test'><strong>{props.name}</strong></p>
        <p className='info-test'>{props.info}</p>
        <p className='text-test'>"{props.text}"</p>
      </div>
    </div>
  );
}
export default Test;

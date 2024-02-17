
import React from 'react';
import {useTypewriter , Cursor} from 'react-simple-typewriter';

function Home() {

  const {text} = useTypewriter({
    words:['Devloper' , 'Designer', 'vcdsv'],
    loop: { },

  })

  return (
      <div className="flex items-center justify-center h-full ">
            <h1  style={{margin:'50px' ,fontSize:'2rem'}}>
              I'm a
              
                <span style={{fontWeight:'bold', color:'white'}}>
                    {text}
                </span>
                <span>
                <Cursor/>
              
                </span>
              </h1>
            
      </div>
  );
}

export default Home;

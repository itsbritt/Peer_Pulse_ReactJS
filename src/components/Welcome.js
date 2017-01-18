import React, { Component } from 'react';
import { CardStack, Card } from 'react-cardstack';



class Welcome extends Component{
  render(){
    return(
      <CardStack
          height={500}
          width={400}
          background='#f8f8f8'
          hoverOffset={25}>

          <Card background='#2980B9'>
              <h1>Number 1</h1>
          </Card>

          <Card background='#27AE60'>
              <h1>Number 2 </h1>
          </Card>

      </CardStack>
    )
  }
}

export default Welcome;

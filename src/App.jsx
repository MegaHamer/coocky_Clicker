import './App.css';
import { useCallback, useMemo, useState } from 'react';

import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text, useTick } from '@pixi/react';


import { useIteration } from './js/useIteration';
import Cookie from './ui/Cookie';

const App = () => {

  const [point, setPoints] = useState(0);


  const onClick = () => {
    setPoints(point + 1)
  }

  

  return (
    <Stage
      width={800} height={600}
      options={{ autoDensity: true, background:"#FAC55C"}}
      raf={true} renderOnComponentChange={false}
      
    >
      <Cookie onClick={onClick}/>

      <Container x={400} y={300} anchor={0.5}>
        <Text
          text={point.toString()}
          anchor={0.5}
          x={0}
          y={-200}
          style={
            new TextStyle({
              align: 'center',
              fill: '0xffffff',
              fontSize: 50,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: '#E72264',
              dropShadowDistance: 6,
            })
          }
        />
      </Container>
    </Stage>
  );
};

export default App;

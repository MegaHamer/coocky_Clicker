import { Sprite, useTick } from "@pixi/react";
import { useState } from "react";

import cookie1 from '../assets/cookie/cookie1.png'
import cookie2 from '../assets/cookie/cookie2.png'
import cookie3 from '../assets/cookie/cookie3.png'
import cookie4 from '../assets/cookie/cookie4.png'
import cookie5 from '../assets/cookie/cookie5.png'
import cookie6 from '../assets/cookie/cookie6.png'
import cookie7 from '../assets/cookie/cookie7.png'
import cookie8 from '../assets/cookie/cookie8.png'

const Cookie = ({onClick}) => {
    const imgs = [cookie1,cookie2,cookie3,cookie4,cookie5,cookie6,cookie7,cookie8];

    const [scaleByClick, setScaleByClick] = useState(0)
    const [time,setTime] = useState(0);
    const [image,setImage] = useState(0);

    useTick(()=>{
        setTime(time + 0.1);

        if (scaleByClick > 0){
            setScaleByClick(scaleByClick - (scaleByClick * scaleByClick) * 0.1);
        }
    })

    const GrowClick = () =>{
        if ( scaleByClick < 5){
            setScaleByClick(scaleByClick + 1)
        }
        setImage( (image + 1) % imgs.length);
    }

    return (
        <Sprite
            image={imgs[image]}
            x={400}
            y={350}
            anchor={0.5}
            rotation={time / 4}
            scale={Math.sin(time) / 50 + 1 + scaleByClick * 0.5}
            onpointerdown={() => {onClick(); GrowClick() }}
            eventMode='static'
        />
    );
}

export default Cookie;
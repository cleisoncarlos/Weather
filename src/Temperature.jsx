import React, { useEffect, useState } from 'react';


import rainy1 from './animated/day.svg'
import rainy2 from './animated/rainy-2.svg'
import rainy3 from './animated/rainy-4.svg'
import rainy4 from './animated/rainy-5.svg'
import rainy5 from './animated/rainy-6.svg'
import night from './animated/night.svg'

function Temperature({ data }) {
  const [rain, setRain] = useState(data.daily.rain_sum[0] * 10)
  const [image, setImage] = useState(rainy1)
  const [text, setText] = useState('sunny')

  useEffect(() => {
    if(rain > 60){
      setImage(rainy5)
      setText('Chuva com Trovões')
    }else if(rain > 40){
      setImage(rainy4)
      setText('Nublado')
    }else if(rain > 20){
      setImage(rainy3)
      setText('Chuva')
    }else if(rain > 0) {
      setImage(rainy2)
      setText('Parcialmente Ensolarado')
    } else {
      setImage(rainy1)
      setText('Ensolarado')
    }
    if(data.current_weather.is_day === 0){
      setImage(night)
      setText('Noite')
      
    }
  })
  
  return (
    <div className="current-temperature">
      <div className="current-temperature__icon-container">
        <img src={image} className="current-temperature__icon" alt="" />
      </div>
      <div className="current-temperature__content-container">
        <div className="current-temperature__value">{Math.round(data.current_weather.temperature)}&deg;</div>
        <div className="current-temperature__summary">
          {text}
        </div>
      </div>
    </div>
  );
}

export default Temperature
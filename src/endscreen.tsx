import React from 'react';
import { useSpring, animated } from 'react-spring';
import {useState} from 'react';
import './endscreen.css'

const EndScreen = ({ kWh }: {kWh:number}) => {
  const carbonEmissionFactor = 0.4; // kg of CO2 per kWh
  const landUsageFactor = 0.015; // square meters of land per kWh
  const treesSavedFactor = 0.0059; // number of trees saved per kWh
  const waterSavedFactor = 0.1; // liters of water saved per kWh
  const solarCost = 3.383;
  const solar = (kWh * solarCost)
  const carbonEmission = (kWh * carbonEmissionFactor).toFixed(2);
  const landUsage = (kWh * landUsageFactor).toFixed(2);
  const treesSaved = Math.round(kWh * treesSavedFactor);
  const waterSaved = (kWh * waterSavedFactor).toFixed(2);

  const [nextPage, setNextPage] = useState(0);
  // Animation for visual elements
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  function doNextPage(){
    setNextPage(1);
  }
  return (
    <div className='container'>
    {nextPage === 0 ? (
       <animated.div className="end-screen" style={fadeIn}>
       <h1>Quiz Completed!</h1>
       <p>You use approximately {kWh} kWh of electricity per year.</p>
 
       <div className="additional-facts">
         <div>
           <strong>Carbon Emission:</strong>
           <p>{carbonEmission} kg CO2</p>
         </div>
         <div>
           <strong>Land Usage:</strong>
           <p>{landUsage} sq. meters</p>
         </div>
         <div>
           <strong>Trees to Offset Emission:</strong>
           <p>{treesSaved} mature trees</p>
         </div>
         <div>
           <strong>Approximate Water Used:</strong>
           <p>{waterSaved} liters</p>
         </div>
       </div>
       <div className="additional-facts">
       <div>
           <strong>Cost for a Solar Energy System for your needs:</strong>
           <p>${solar}</p>
         </div>
       </div>
     <button className='quiz-score-section' onClick={doNextPage}>Next</button>
     </animated.div>
    ) : (
      <>
      <h1>Quiz Completed!</h1>
       <p>You use approximately {kWh} kWh of electricity per year.</p>
       <p>Heres some tips to help you lower that!</p>
 
       <ol>
        <li>Use LED bulbs for energy efficiency.</li>
        <li>Unplug chargers and devices not in use.</li>
        <li>Choose ENERGY STAR appliances.</li>
        <li>Set thermostat a few degrees lower in winter/higher in summer.</li>
        <li>Seal doors/windows to prevent drafts.</li>
        <li>Maintain HVAC system and replace filters.</li>
        <li>Maximize natural light, open curtains.</li>
        <li>Upgrade to energy-efficient windows.</li>
        <li>Use ceiling fans for better air circulation.</li>
        <li>Wash clothes in cold water.</li>
        <li>Air-dry clothes or clean dryer lint filter.</li>
        <li>Take shorter showers, consider a low-flow showerhead.</li>
        <li>Cook efficiently, use right-sized pots and pans.</li>
        <li>Turn off lights when leaving a room.</li>
        <li>Plant trees for shade, reduce AC usage.</li>
        <li>Invest in smart appliances for energy monitoring.</li>
        <li>Educate family on energy-saving habits.</li>
        <li>Conduct a home energy audit for efficiency.</li>
      </ol>


      </>
    )}
   
    </div>
  );
};

export default EndScreen;

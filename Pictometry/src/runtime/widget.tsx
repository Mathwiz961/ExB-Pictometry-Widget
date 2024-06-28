import React, { useState, useEffect, useRef } from 'react';
import { AllWidgetProps } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import Point from "esri/geometry/Point";
import PicIcon from './picIcon.svg';

const Widget = (props: AllWidgetProps<any>) => {
  const [picState, setPicState] = useState(false);
  const jimuMapViewRef = useRef<JimuMapView>(null);
  const clickEventListenerRef = useRef<any>(null); // Ref to store the click event listener

  useEffect(() => {
    const handleMapClick = (jmv: JimuMapView) => {
      if (jmv) {
        clickEventListenerRef.current = jmv.view.on("click", (evt) => {
          const point: Point = jmv.view.toMap({
            x: evt.x,
            y: evt.y
          });

          // Construct URL with coordinates
          const url = `https://maps.co.palm-beach.fl.us/pol/polipa.aspx?POlocation=${point.latitude.toFixed(5)},${point.longitude.toFixed(5)}`;

          // Open new web page
          window.open(url, "_blank");
        });
      }
    };

    if (picState && jimuMapViewRef.current) {
      // Add event listener when picState is true and jimuMapViewRef is available
      handleMapClick(jimuMapViewRef.current);
    } else {
      // Remove event listener when picState is false or jimuMapViewRef is not available
      clickEventListenerRef.current?.remove(); // Remove the event listener
    }

    // Cleanup function to remove event listener when component unmounts or picState changes
    return () => {
      clickEventListenerRef.current?.remove(); // Remove the event listener
    };
  }, [picState]);

  const togglePicState = () => {
    setPicState(prevState => !prevState); 
  };

//stylize the div container
const divStyle = { 
  width: '100%', 
  height:'100px', 
  backgroundColor: picState? '#004ca3':'#076fe5', 
  color: 'white', 
  border: 'none', 
  padding: '10px 10px', 
  fontSize: '16px', 
  borderRadius: '30px',
  cursor: 'pointer'
}

//Widget display, opens pictometry when picState is true, default map click when picState is false
  return (
    <div style={{backgroundColor: '#FFFFFF', padding: '20px'}}>
      {picState ? (
        <div>
          <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={jmv => jimuMapViewRef.current = jmv} />
          <button id="Pictometry-button" style={divStyle} onClick={togglePicState}>
            <img src= {PicIcon} alt="Pictometry icon" style={{ width: '50px', height:'50px', borderRadius: '15px'}} /> 
            <br/>Click to deactivate Pictometry
          </button>
          <br/><br/>
          <div style={{color: '#002855', fontWeight: 'bold', fontSize: '18px', padding: '20px'}}>          
            <font>Click the button above to activate/deactivate Pictometry.  When Pictometry is active click on the map to open Pictometry.</font> <br/>
            
          </div>
          <div style={{color: 'Red', fontWeight: 'bold', fontSize: '18px', padding: '20px' }}> 
            <font >Note: Pictometry will not work if selection tool is enabled.</font>
          </div>
          <div style={{ color: 'Navy', fontWeight: 'bold', fontStyle: 'italic', fontSize: '12px', padding: '20px' }}> 
            Widget designed by Dr. Angela Schirck
          </div>  
        </div>
      ) : (
        <div>
          <button id="Pictometry-button" style={divStyle} onClick={togglePicState}>
           <img src= {PicIcon} alt="Pictometry icon" style={{ width: '50px', height:'50px', borderRadius: '15px'}} /> 
           <br/> Click to activate Pictometry
            </button>
          <br/><br/>
          <div style={{color: '#002855', fontWeight: 'bold', fontSize: '18px', padding: '20px'}}>          
            <font>Click the button above to activate/deactivate Pictometry.  When Pictometry is active click on the map to open Pictometry.</font> <br/>
            
          </div>
          <div style={{color: 'Red', fontWeight: 'bold', fontSize: '18px', padding: '20px' }}> 
            <font >Note: Pictometry will not work if selection tool is enabled.</font>
          </div>
          <div style={{ color: 'Navy', fontWeight: 'bold', fontStyle: 'italic', fontSize: '12px', padding: '20px' }}> 
            Widget designed by Dr. Angela Schirck
          </div> 
        </div>
      )}
    </div>
  );
}

export default Widget;
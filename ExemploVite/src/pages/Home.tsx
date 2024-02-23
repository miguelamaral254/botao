import React, { useEffect, useState } from "react";
import audio from "../assets/audio.mp3";
import image from "../assets/flamengo.webp"



const Home: React.FC = () => {
   
   
        const [isPlaying, setIsPlaying] = useState(false);
      
        const handlePlayPause = () => {
          setIsPlaying(!isPlaying);
        };
      
        useEffect(() => {
          if (isPlaying) {
            const audioElement = new Audio(audio);
            audioElement.play();
      
            return () => audioElement.pause();
          }
        }, [isPlaying]);
      
        return (
          <div>
             <img src={image} alt="Flamengo" width="500px" style={{ display: isPlaying ? "block" : "none" }} />
           
           
            <button onClick={handlePlayPause} 
            style={{
                backgroundColor: isPlaying ? "red" : "white", 
                color: isPlaying ? "white" : "red", 
                padding: "10px 20px", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer", 
                transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
                 
            
              }
              }>
              {isPlaying ? "Aceitar o Mengão" : "FLAMENGO???"}
              
              
            </button>
          </div>
        );
      };
         
    


export default Home;

import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';

export default class Census extends React.Component{
    constructor(props){     
        super(props);
        this.state={
            data:{
                labels: ["1","2","3","4","5"],
                datasets:[
                    {
                        label:"Count",
                        backgroundColor:"rgba(255, 0, 255, 0.75)",
                        data:[4,5,1,10,32,2,12]
                    },
                    {
                        label:"Volume",
                        backgroundColor:"rgba(0, 255, 0, 0.75)",
                        data:[4,5,1,10,32,2,12]
                    }
                 ]
            }
        }
    }
    setGradientColor=(canvas, color)=>{
        const ctx=canvas.getContext('2d');
        const gradient=ctx.createLinearGradient(0,0,600,550);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133,122,144,0.5)")
        return gradient;
    }

    getChartData= canvas =>{
        const data=this.state.data;
        if(data.datasets){
            let colors=["rgba(255, 0, 255, 0.75)","rgba(0, 255, 0, 0.75)"];
            data.datasets.forEach((set,i)=>{
                set.backgroundColor=this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
            });
        }
        return data;
    }
    
    render(){
         return(
             <div style={{position:"relative", width: 1000, height:550}}>

              <Line options={{
                  responsive: true,
                  lineHeightAnnotation:{
                       // color of the shadow
                        color: 'rgba(0,0,0,0.35)',
                        // blur of the shadow
                        blur: 10,
                        hover:true,
                  }
              }} data={this.getChartData}/>
             </div> 
         )
     }

}
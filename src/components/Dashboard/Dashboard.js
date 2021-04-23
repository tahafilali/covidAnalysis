import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ReactMapGL, {Marker} from 'react-map-gl';
import axios from 'axios';

const Dashboard = () => {
  const [length, setLength] = useState(0);
  const [data,setData] = useState([])
  const [positiveWords, setPositiveWords] = useState(0);
  const [negativeWords, setNegativeWords] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 31.792305849269,
    longitude: -7.080168000000015,
    zoom: 4
  });

  useEffect(() => {
    const fetchData =async ()=>{
      const result = await axios('http://127.0.0.1:5000/api/data')
      setData(result.data)
      console.log(result.data)
    }
    fetchData()
    setLength(localStorage.getItem('length'));
  }, []);
  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
  const chartData = {
    labels: data.map(x=>new Date(x['date']).getFullYear()+"-"+(new Date(x['date']).getMonth()+1)+"-"+new Date(x['date']).getDate()),
    datasets: [
      {
        type:'bar',
        label: 'Polarity',
        data: data.map(x=>parseFloat(x['polarity'])),
        backgroundColor: random_rgba(),
        borderColor: random_rgba(),
        borderWidth: 1,
      },
      {
        type:'line',
        label: 'Polarity',
        data: data.map(x=>parseFloat(x['polarity'])),
        backgroundColor: random_rgba(),
        borderColor: random_rgba(),
        fill:false,
        borderWidth: 1,
      }
    ],
  };

  const options = {
    legend:{display:false},
    title:{display:true,text:"Sentiment Analysis"},
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const calculateAvg = (values)=>{
    let sum=0
    values.map(x=>parseFloat(x['polarity'])).forEach((item)=>{
      sum=+item
    })
    return sum/(values.length)
  }

  const getRecommendation = (x)=>{
    if( -1<=x && x<-0.6){
      return <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>le people a perdu completement confiance en son gouvernement, des mesures drastiques doivent etre prises.</li>
    }
    if( -0.6<=x && x<-0.2){
      return <ul><li>la morale du people est basse, la populace cède au désespoire :</li><p style={{margin:"20px",textTransform:"uppercase",color:"red"}}>recommendations</p> <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>montrer que la situation s'ameliore</li> <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>donner espoir au people</li><li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}> rassurer que la fin est presque arrivé.</li></ul>
    }
    if( -0.2<=x && x<0.2){
      return <ul><li style={{margin:"20px"}}>Le people perd confiance en son gouvernement, plus d'efforts sont necessaires :</li><p style={{margin:"20px",textTransform:"uppercase",color:"red"}}>recommendations</p>
      <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>rappeler le people que cette situation est temporaire</li> <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>Rassurer que le deroulement de la vaccination se deroule bien, etc..</li></ul>
    }
    if( 0.2<=x && x<0.6){
      return <ul><li>La morale du people est positive mais fragile, fournir plus d'effort pour reassurer la populace, peut inclure:</li><p style={{margin:"20px",textTransform:"uppercase",color:"red"}}>recommendations</p>
      <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>expliquer les dangers du coronavirus</li> <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>expliquer la raison des mesures prises par le gouvernement.</li></ul>
    }
    if( 0.6<=x && x<1){
      return <li style={{margin:"20px",textTransform:"uppercase",fontWeight:"bold"}}>La morale du people est bonne continuer avec la meme methodologie, une marge de liberté ou on peut 
			reduire les efforts existe</li>
    }
  }

  return(
    <>
        <div className="content" style={{display:"flex",flexWrap:"wrap",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/loutfox/cknumfbw00zpj17oazr22tozo"
      mapboxApiAccessToken={"pk.eyJ1IjoibG91dGZveCIsImEiOiJja251bHQyMm0wZTY2Mnhtbm9mNmdtejR3In0.M90d6MIWlxVOjQbf5YUhbQ"}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
       <Marker latitude={31.40865767868528} longitude={-8.453459015625011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={33.996808617938214} longitude={-6.860441437500011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={33.54932611758831} longitude={-7.629484406250011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={27.136060259924125} longitude={-13.155607453125011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={30.948086282929978} longitude={-6.926359406250011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={30.428462138833886} longitude={-9.618009796875011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={33.969478961049475} longitude={-5.058683625000011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={32.28588999222994} longitude={-6.366056671875011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
      <Marker latitude={30.381085166322215} longitude={-9.563078156250011} offsetLeft={-20} offsetTop={-10}>
       <img style={{width:"30px",height:"30px"}} src="icon.png" />
      </Marker>
    </ReactMapGL>
    </div>
    <div className="content" style={{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
      <div style={{border:"1px solid gray",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",borderRadius:"5px",padding:"10px",marginRight:"20px"}}>
      <Bar data={chartData} options={options} width={900} height={400} />
      </div>
      <div style={{textAlign:"left",marginLeft:"20px",border:"1px solid gray",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",borderRadius:"5px",padding:"10px",height:"421px"}}>
      <ul>
      <p style={{margin:"20px",textTransform:"uppercase",color:"blue"}}>description : </p>
       {getRecommendation(calculateAvg(data))}
        </ul></div>
        
    </div>

    </>
  )

}

export default Dashboard;

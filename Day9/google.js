

const serach=async()=>{
    try{
    const url=`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDJGPf4PpjxvdfFRjuiPVzB4VzqG4v7n2c`
    const res=await fetch(url, { mode: 'no-cors'})
     const data=await res.json()
     console.log(res)
    //  console.log(data.cellTowers)

    }catch(err){
        console.log(err)
    }
}
serach()
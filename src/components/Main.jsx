import React, { useEffect, useState } from "react";

const Main = () => {
const [value, setValue]=useState("");


  const getData =()=>{
   var data= fetch('contract.txt').then(function(response){
      return response.text();
    }).then(function(data){
      console.log(data);
    })

    setValue(data);
    var ans=value.split("|");
    console.log(ans);

    

  };


  useEffect(()=>{
    getData();
  },[])

  
  return (
    <div className="main">
      <input type="radio" value="NFO" name="radio"  className="radio"/> 
        NFO
      <input type="radio" value="CDS" name="radio" className="radio"/>
      CDS
      <input type="radio" value="MCX" name="radio" className="radio"/>
      MCX

      <div className="input-box">
        <div>
          <p>Symbol</p>
          <input type="text"  className="input" placeholder="Select" onClick={getData}/>
        </div>

        <div>
          <p>Product</p>
          <input type="text"  className="input" placeholder="Select"/>
        </div>

        <div>
          <p>Expiry</p>
          <input type="text"  className="input" placeholder="Select"/>
        </div>
      </div>

      <div className="input-box">
        <div>
          <p>Option Type</p>
          <input type="text"  className="input" placeholder="Select"/>
        </div>

        <div>
          <p>Strike Price</p>
          <input type="text"  className="input" placeholder="Select"/>
        </div>

        <div className="buy">
          <input type="radio" name="Buy" id=""  />
          Buy
          <input type="radio" name="Buy" id="" />
          Sell
        </div>
      </div>

        <div className="">
            <div>
                <p>Lots</p>
                <input type="number"    className="input"/>
            </div>

            <div className="quantity">
                <p>Net Quantity:0</p>
                <div className="button">
                <button>Add</button>
                <button>Reset</button>

                </div>
            </div>
        </div>
        

    </div>
  );
};

export default Main;

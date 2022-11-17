import React, { useState } from "react";

const Main = () => {
  const [value, setValue] = useState("");
  const [secIndex, setSecIndex] = useState();
  const [product, setProduct] =useState(true)

  const getData = () => {
    fetch("contract.txt")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        setValue(data);
        const ans = value.split("\n");
        // console.log(ans);

        const splitted_data = ans.map((val) => {
          const data = val.split("|");
          return data;
        });
        // console.log(splitted_data);

        // const secondIndex = splitted_data.map((val) => {
        //   return val[2];
        // });
        // console.log(secondIndex);

        const symbol = splitted_data.map((val) => {
          return val[3];
        });
        setSecIndex(symbol);
        console.log(secIndex);
      });
  };

  const handleChange = () => {
    //  const symbol = new Set(secIndex);
    //  symbol.add(secIndex);
    //  console.log(symbol);
  };

  const handleProduct=()=>{
    setProduct(!product)
   return <select>
    <option value="">Future</option>
    <option value="">Option</option>
   </select>
  }

  return (
    <div className="main">
      <input type="radio" value="NFO" name="radio" className="radio" />
      NFO
      <input type="radio" value="CDS" name="radio" className="radio" />
      CDS
      <input type="radio" value="MCX" name="radio" className="radio" />
      MCX
      <div className="input-box">
        <div>
          <p>Symbol</p>
          <input
            type="text"
            className="input"
            placeholder="Select"
            onClick={getData}
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="" id="">
            {/* {secIndex.map((val)=>( <option>{val}</option>))} */}
          </select>
        </div>
        <div>
          <p>Product</p>
          <input type="text" className="input" placeholder="Select" onClick={handleProduct} />
        </div>
      

        <div>
          <p>Expiry</p>
          <input type="text" className="input" placeholder="Select" />
        </div>
      </div>
      <div className="input-box">
        <div>
          <p>Option Type</p>
          <input type="text" className="input" placeholder="Select" />
        </div>

        <div>
          <p>Strike Price</p>
          <input type="text" className="input" placeholder="Select" />
        </div>

        <div className="buy">
          <input type="radio" name="Buy" id="" />
          Buy
          <input type="radio" name="Buy" id="" />
          Sell
        </div>
      </div>
      <div className="">
        <div>
          <p>Lots</p>
          <input type="number" className="input" />
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

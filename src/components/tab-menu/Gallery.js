
import React, { useState } from 'react';
import Menu from "./menu";

const G1 = () => {
  const [items ,setItems] = useState(Menu);
  const filterItem=(CategItem)=>{
    const updateitem= Menu.filter((curele)=>{
    return curele.category===CategItem;

    })
    setItems(updateitem);

  }
  return (
    <>
      <p className='text-center mt-20'>Quarter is a heritage that you would gift to the next generation as it seamlessly weaves convenience,<br/> thoughtfully and technological innovations amidst a safe and secure envoirnment. Its addresses all socaio-enviromental<br/> concerns that urban life presennrs to us and adds a sense of balance to your living.</p>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn " onClick={()=>filterItem('room')}>APARTMENT VIEWS</button>
          <button className="btn " onClick={()=>filterItem('home')}>AMENITIES VIEWS</button>
        
          <button className="btn " onClick={()=>setItems(Menu)}>All</button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const {image} = elem;
                return (
                  <>
                    <div className="items col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="row item-inside">
                        <div className="col-12 col-md-12 col-lg-4 img-div">
                          <img src={image} alt="G-image"></img>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default G1;

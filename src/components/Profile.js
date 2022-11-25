import React from 'react';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile-frame'>
        <div className='profile-pic'>
          <img src="https://th.bing.com/th?q=Trending+Men%27s+Clothes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>

        </div>
        <div className='profile-data'>
          <h1> Great company</h1>
          <div className='profile-info' style={{display:"flex"}}>
            <p> 40 posts</p>
            <p> 40 followers</p>
            <p>  40 following</p>

          </div>

        </div>

      </div>
       <hr style={
        {
          width:"90%",
          margin:"25px auto",
          opacity:"0.8",
         

        }
       }/>

      {/* gallery */}
      <div className='gallery'>
      <img src="https://th.bing.com/th/id/OIP.0fv0xkr-rhW7SuDMAa88tQAAAA?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
      <img src="https://th.bing.com/th/id/OIP.OizXVuCdfAfGe48PxB3vcQAAAA?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
      <img src="https://th.bing.com/th/id/OIP.enKxKnrakyrHIFWjEHm3oQHaJ3?w=203&h=271&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
      <img src="https://th.bing.com/th/id/OIP.FIy9UlvncSZNgEOK2CLtkgAAAA?w=193&h=322&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
      <img src="https://th.bing.com/th/id/OIP.RWQGSELoTlL6ZL0qu-P8TAHaHD?pid=ImgDet&w=200&h=190&c=7&dpr=1.5"/>
      <img src="https://th.bing.com/th/id/OIP.X714_sxnCgbwPxABG8ISYgHaF7?pid=ImgDet&w=200&h=160&c=7&dpr=1.5"/>



      </div>


    </div>
  )
}
 
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css" ;

export default function Home() {

  
  return (
    <div className='home'>
      {/* card */}
      <div className='card'>
        <div className='card-header'>
          <div className='card-pic' >
            <img src='https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60'/>
            {/* <img src='https://images.unsplash.com/photo-1664979385835-ae4dba337f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3M3xibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'/> */}

          </div>
          <h5> Avdhesh</h5>

        </div>
        {/*  card image */}
        <div className='card-image'>
          <img src='https://th.bing.com/th/id/OIP.U5hXxtduJ6_Yw2Hn4OIOBwHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>
          <img src='https://th.bing.com/th/id/OIP.HnXRd8fakKlxOyk8269u0gHaE8?w=306&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>

        </div>

        {/* card content */}
        <div className='card-content'>
         <span className="material-symbols-outlined">
                    favorite
          </span>
          <p> 1m Likes</p>
          <p> who is Foodie</p>
        </div>

        <div className='add-comment'>
          <span className="material-symbols-outlined">
             mood
          </span>
          <input type="text" placeholder='Add a comment'/>
          <button className='comment'> Post</button>

        </div>

      </div>


      
      <div className='card'>
        <div className='card-header'>
          <div className='card-pic' >
            <img src='https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60'/>
            {/* <img src='https://images.unsplash.com/photo-1664979385835-ae4dba337f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3M3xibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'/> */}

          </div>
          <h5> Amit</h5>

        </div>
        {/*  card image */}
        <div className='card-image'>
          <img src='https://th.bing.com/th/id/OIP.syJS1DlopkF9gx_z3Ir7QwHaDt?w=277&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>

        </div>

        {/* card content */}
        <div className='card-content'>
         <span className="material-symbols-outlined">
                    favorite
          </span>
          <p> 199 Like</p>
          <p> My new Laptop</p>
        </div>

        <div className='add-comment'>
          <span className="material-symbols-outlined">
             mood
          </span>
          <input type="text" placeholder='Add a comment'/>
          <button className='comment'> Post</button>

        </div>




      </div>
      <div className='card'>
        <div className='card-header'>
          <div className='card-pic' >
            <img src='https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60'/>
            {/* <img src='https://images.unsplash.com/photo-1664979385835-ae4dba337f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3M3xibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'/> */}

          </div>
          <h5> Rahul</h5>

        </div>
        {/*  card image */}
        <div className='card-image'>
          <img src='https://th.bing.com/th/id/OIP.mXctXSspTNvZNW4JTY6ysAHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>

        </div>

        {/* card content */}
        <div className='card-content'>
         <span className="material-symbols-outlined">
                    favorite
          </span>
          <p> 13 Likes</p>
          <p> sweet Home</p>
        </div>

        <div className='add-comment'>
          <span className="material-symbols-outlined">
             mood
          </span>
          <input type="text" placeholder='Add a comment'/>
          <button className='comment'> Post</button>

        </div>




      </div>
      <div className='card'>
        <div className='card-header'>
          <div className='card-pic' >
            <img src='https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60'/>
            {/* <img src='https://images.unsplash.com/photo-1664979385835-ae4dba337f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3M3xibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'/> */}

          </div>
          <h5> google</h5>

        </div>
        {/*  card image */}
        <div className='card-image'>
          <img src='https://th.bing.com/th/id/OIP.j49w5BwlAkHAkbVUtWCU2AAAAA?w=250&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>

        </div>

        {/* card content */}
        <div className='card-content'>
         <span className="material-symbols-outlined">
                    favorite
          </span>
          <p> 108 Likes</p>
          <p> wonderful ..</p>
        </div>

        <div className='add-comment'>
          <span className="material-symbols-outlined">
             mood
          </span>
          <input type="text" placeholder='Add a comment'/>
          <button className='comment'> Post</button>

        </div>




      </div>

    </div>
  )
}

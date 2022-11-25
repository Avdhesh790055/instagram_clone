import React,{useState} from 'react';
import "./Createpost.css";

export default function Createpost() {

    const loadfile=(event)=>{
        var output= document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
            URL.revokeObjectURL(output.src) // free memory
        }


    }
  return (
    <div className='createpost'>

        {/* header */}
        <div className='post-header'>
            <h4 style={{margin:"3px auto"}}> Create New Post</h4>
            <button id='post-btn'> Share </button>

        </div>

        {/* image preview */}
        <div className='main-div'>
            <img id='output' src='https://th.bing.com/th/id/R.66754ec538a650d7f0058a92dfa87c2c?rik=zxjjfdK4GJNkbg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_234957.png&ehk=Fi1SrQ6CCna9G4YthIa%2fPeLqp2EuDeiIUU7VEihDa1E%3d&risl=&pid=ImgRaw&r=0'/>
            <input type="file" accept='image/*' onChange={(event)=>{
                loadfile(event);
                
            }}/>
        </div>
        {/* Details */}
        <div className='detais'>
            <div className='card-header'>
                <div className='card-pic'>
                 <img src="https://th.bing.com/th?q=Trending+Men%27s+Clothes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
                </div>
               <h5> Avdhesh</h5> 

            </div>

            <textarea type="text" placeholder="Write a caption...."></textarea>


        </div>

    </div>
  )
}

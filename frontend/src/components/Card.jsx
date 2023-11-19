import React from 'react'

const Card = ({post}) => {
  return (
        <>
           {/* <div className="p-0 mx-0 rounded w-80 flex items-center justify-center shadow-md shadow-indigo-600">
            <div className="p-7">
              
                <img src={post.avatar}/>
                <h2 className="text-xl text-black font-bold ">First Name: <span className=' text-indigo-600'>{post.first_name}</span></h2>
                <p className="text-gray-600"><strong>Last Name: </strong>{post.last_name}</p>
                <p className="text-gray-600"><strong>Email: </strong>{post.email}</p>
                <p className="text-gray-600"><strong>Gender: </strong>{post.gender}</p>
                <p className="text-gray-600"><strong>Avatar: </strong>{post.avatar}</p>
                <p className="text-gray-600"><strong>Domain: </strong>{post.domain}</p>
                <p className="text-gray-600"><strong>Available: </strong>{post.available}</p>
          
            </div>
        </div> */}

    // card component user card component
    <div class="main bg-yellow-400 grid place-items-center h-screen">
  
          <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64">
    
                  <div class="profile mx-auto rounded-full py-2 w-16">
                      <img src={post.avatar} alt="profile"/>
                  </div>
             
                  <div class="name text-gray-800 text-2xl font-medium mt-4">
                      <p>{post.first_name} {post.last_name}</p>
                  </div>
          
                  <div class="username text-gray-500">
                      <p>{post.email}</p>
                  </div>
                 
                  <div class="work text-gray-700 mt-4">
                      <p>{post.domain} 🧑‍💻</p>
                  </div>
                  <div class="work text-gray-700 mt-4">
                      <p><strong>Gender:</strong> {post.gender}</p>
                  </div>
                  <div class="work text-gray-700 mt-4">
                      <p><strong>Available:</strong> {post.available}</p>
                  </div>
          </div>
        </div>
        </>
  )
}

export default Card
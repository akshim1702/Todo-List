// import React, { useState } from 'react';

// export const Update = ({update}) => {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");
//     const submitUpdate=(e)=>{
//         e.preventDefault();
//         if(!title || !desc){
//             alert("khaali nii chodnekaaa....   xD");
//         }
//         else{
//         update(title,desc);
//         setTitle("");
//         setDesc("");
//         }
//     }
//     return (
//         <div className="container">
//             <h1>Update Your Todo</h1>
//             <hr/>
//             <form className="mx-3" onSubmit={submitUpdate}>
//   <div className="mb-3">
//     <label htmlFor="title" className="form-label">Todo Title</label>
//     <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
    
//   </div>
//   <div className="mb-3">
//     <label htmlFor="desc" className="form-label">Description</label>
//     <input type="desc" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
//   </div>
//   <button type="submit" className="btn btn-primary">Update</button>
// </form>
//         </div>
//     )
// }

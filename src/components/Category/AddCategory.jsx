import React, { useState } from 'react'
import { usePost } from '../../context/PostContextPrivder'



const AddCategory = () => {
  const [hashtag, setHashtag] = useState('')
  const {addCategory} = usePost();
function categorySave(){
  let formData = new FormData()
  formData.append('tag', hashtag)
  formData.append('slug', hashtag)
  addCategory(formData)
}
  return (
    <div>
      <input type="text" onChange={(e)=> setHashtag(e.target.value)} />
      <button onClick={categorySave}>add Category</button>
    </div>
  )
}

export default AddCategory

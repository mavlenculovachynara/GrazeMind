import React, { useState } from 'react'
import { usePost } from '../../context/PostContextPrivder'
import './AddCategory.css'



const AddCategory = () => {
  const [hashtag, setHashtag] = useState('')
  const [hashtagConfirm, setHashtagConfirm] = useState('')
  const {addCategory} = usePost();
function categorySave(){
  let formData = new FormData()
  formData.append('tag', hashtag)
  formData.append('slug', hashtagConfirm)
  addCategory(formData)
}
  return (
    <div className='addTag-form'>
      <div className='addTag-container'>
        <h2>Добавление хэштега</h2>
      <input className='addTagInp' placeholder='Введите хэштег' type="text" onChange={(e)=> setHashtag(e.target.value)} />
      <input className='addTagInp' placeholder='Потвердите хэштег на английском' type="text" onChange={(e)=> setHashtagConfirm(e.target.value)} />
      <button className='addTagBtn' onClick={categorySave}>Добавить</button>
      </div>
    </div>
  )
}

export default AddCategory

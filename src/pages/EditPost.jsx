import React, { useState } from 'react'
import { Container,PostForm } from '../components/index'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';
function EditPost() {
    const [post,setposts]=useState([]);
    const {slug}=useParams()
    const navigate=useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug)
            .then((post)=>{
                if(post){
                    setposts(post);
                }
            })
        }
        else{
            navigate('/');
        }
    },[slug,navigate])



  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ):null
}

export default EditPost

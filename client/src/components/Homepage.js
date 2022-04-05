import { useState, useEffect } from "react";
import Axios from "axios";

const Homepage = () =>{
    const [listOfPosts, setListOfPosts] = useState([]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        Axios.get("http://localhost:3001/getPosts").then((response) => {
            setListOfPosts(response.data);
        });
    }, []); 

    const createPost = () => {
      if (title && content && image){
        Axios.post("http://localhost:3001/createPost", {title, content, image}).then((response) => {
            setListOfPosts([...listOfPosts, {title, content, image}]);
        });
      }   
    };
  

    return (
        <div className="App">
          <div class="container">
            <div>
              <form>
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input maxlength="100" type="text" id="title" placeholder="A title for your post" class="form-control" onChange={(event) => {setTitle(event.target.value)}}/>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">Content</label>
                  <textarea maxlength="615" style={{resize: "none"}} rows="5" type="text" id="content" placeholder="The main body of your post" class="form-control" onChange={(event) => {setContent(event.target.value)}}/>
                </div>
                <div class="mb-3">
                  <label for="image" class="form-label">Image</label>
                  <input type="text" id="image" placeholder="Image URL (imgur recommended)" class="form-control" onChange={(event) => {setImage(event.target.value)}}/>
                </div>
                <button onClick={createPost} class="btn btn-primary">Post</button>
              </form>
            </div>
            <br/><br/>
            <div>
              {listOfPosts.slice(0).reverse().map((posts) => {
                return(
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">{posts.title}</h1>
                      <p class="card-text">{posts.content}</p>
                      <div>
                        <img style={{height: 200}} src={posts.image} alt=""/>
                      </div>
                      <hr class="border-2 border-top" />
                      <small class="card-text fw-light">{posts._id}</small>
                    </div>
                  </div> 
                );
              })}
            </div>       
          </div>
        </div>
    );
}
export default Homepage;
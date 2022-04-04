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
        Axios.post("http://localhost:3001/createPost", {title, content, image}).then((response) => {
            setListOfPosts([...listOfPosts, {title, content, image}]);
        });
    };
  

    return (
        <div className="App">
          <div>
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" id="title" class="form-control" onChange={(event) => {setTitle(event.target.value)}}/>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">Content</label>
                <input type="text" id="content" class="form-control" onChange={(event) => {setContent(event.target.value)}}/>
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">Image</label>
                <input type="text" id="image" class="form-control" onChange={(event) => {setImage(event.target.value)}}/>
              </div>
              <button onClick={createPost} class="btn btn-primary">Post</button>
            </form>
          </div>

          <div>
            {listOfPosts.map((posts) => {
              return(
                <div class="card">
                  <div class="card-body">
                    <h1 class="card-title">{posts.title}</h1>
                    <p class="card-text">{posts.content}</p>
                    <div>
                      <img src={posts.image} alt=""/>
                    </div>
                  </div>
                </div> 
              );
            })}
          </div>
        </div>
    );
}
export default Homepage;
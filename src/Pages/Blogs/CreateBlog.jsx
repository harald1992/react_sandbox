import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { environment } from "../../environment";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsLoading(true);

        fetch(environment.api.blogs, {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json()
                .then(data => {
                    setIsLoading(false);
                    navigate(environment.routes.blogs);
                })
                .catch(error => {
                    console.log(error);
                    setIsLoading(false);
                }
                ))
    }

    return (
        <div className="create">
            <Link to="/blogs">Back</Link>

            <h2>Add a New Blog</h2>

            <form className="flex-column" onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />

                <br />
                <label>Blog body:</label>
                <textarea required value={body} onChange={e => setBody(e.target.value)}></textarea>

                <br />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <br />
                {!isLoading && <button type="submit">Add Blog</button>}
                {isLoading && <button disabled type="submit">Subnmitting Blog</button>}

                <hr />
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <p>Author: {author}</p>


            </form>
        </div>
    )
}

export default CreateBlog;
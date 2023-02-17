import { useNavigate, useParams } from "react-router-dom"
import { environment } from "../../environment";
import useFetch from "../../Hooks/useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch(environment.api.blogs + id);

    const navigate = useNavigate();

    const handleClick = () => {
        fetch(environment.api.blogs + blog.id, { method: 'DELETE' })
            .then(() => {
                navigate(environment.routes.blogs)
            })
    }

    return (
        <div className="blog-details">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error} </p>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    {blog.author && <p>Written by {blog.author}</p>}
                    <div>{blog.body}</div>
                    <button onClick={() => handleClick()}>Delete X</button>
                </article>

            )}

        </div>
    )
}

export default BlogDetails;
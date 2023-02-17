import { useParams } from "react-router-dom"
import { environment } from "../../environment";
import useFetch from "../../Hooks/useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch(environment.blogs + id);


    return (
        <div className="blog-details">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error} </p>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>

            )}

        </div>
    )
}

export default BlogDetails;
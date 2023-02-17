import { Blogs } from "./Blogs/Blogs";
import useFetch from "../Hooks/useFetch";
import { environment } from "../environment";
import { Link, useNavigate } from "react-router-dom";

export const BlogHomePage = () => {
    const { data: blogs, setData: setBlogs, isLoading, error } = useFetch(environment.api.blogs);

    const navigate = useNavigate();

    const handleDelete = (id) => {
        fetch(environment.api.blogs + id, { method: 'DELETE' })
            .then(() => setBlogs(blogs.filter(blog => blog.id !== id)))
            .catch(error => console.log(error))
    }



    return (
        <div className="">
            <Link to="/blogs/create">Create Blog +</Link>

            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {!blogs && <p>No blogs found</p>}
            {blogs &&
                <>
                    <Blogs blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
                    <hr />
                    <Blogs blogs={blogs.filter(blog => blog.author === 'yoshi')} title="All Blogs by Joshi" handleDelete={handleDelete}></Blogs>
                    <hr />
                    <Blogs blogs={blogs.filter(blog => blog.author === 'mario')} title="All Blogs by Mario" handleDelete={handleDelete} />
                    <hr />
                </>
            }
        </div>
    );
};

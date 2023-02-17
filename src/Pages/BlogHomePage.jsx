import { Blogs } from "./Blogs/Blogs";
import useFetch from "../Hooks/useFetch";
import { environment } from "../environment";

export const BlogHomePage = () => {
    const { data: blogs, setData: setBlogs, isLoading, error } = useFetch(environment.blogs);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="">
            {isLoading && <p>Loading...</p>}
            {error && <div>{error.message}</div>}
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

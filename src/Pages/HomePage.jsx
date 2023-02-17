import styles from "./HomePage.module.css";
import Agenda from "./Agenda/Agenda";
import { Blogs } from "./Blogs/Blogs";
import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

export const HomePage = () => {
    const title = "Homepage";
    const [name, setName] = useState('mario');

    const { data: blogs, setData: setBlogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => {
            // console.log(blogs);
            // console.log(isLoading);
            // console.log(error);
            // console.log(setBlogs);

        }, 500);
    })

    return (
        <div>

            <h1>{title}</h1>
            <br />
            <Agenda></Agenda>

            <hr />

            <button onClick={() => setName('louigi')}>change name</button>
            <p>{name}</p>
            <hr />

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

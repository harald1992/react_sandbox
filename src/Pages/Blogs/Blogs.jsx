import { useState } from "react";
import styles from "./Blogs.module.css";

export const Blogs = ({ blogs, title, handleDelete }) => {

    return (
        <>
            <h1>{title}</h1>
            <div className={styles.blogcontainer}>

                {blogs.map(blog => (
                    <div className={styles.blogpreview} key={blog.id}>
                        <h2>{blog.title} </h2>
                        <p>Written by {blog.author} </p>
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                ))}
            </div>

        </>
    );
};

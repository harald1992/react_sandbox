import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
import "./Blogs.css"

export const Blogs = ({ blogs, title, handleDelete }) => {

    return (
        <>
            <h1>{title}</h1>
            <div className={styles.blogcontainer}>

                {blogs.map(blog => (
                    <>
                        <div className="blog-container">
                            <button className="righttop" onClick={() => handleDelete(blog.id)}>x</button>

                            <Link key={blog.id} className="card bloglink" to={`/blogs/${blog.id}`}>

                                <h5 className={styles.relative}>{blog.title} </h5>
                                <p>Written by {blog.author} </p>
                            </Link>
                        </div>
                    </>


                ))}
            </div>

        </>
    );
};

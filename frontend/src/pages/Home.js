import { useEffect, useState } from "react";
import "../styles/Home.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "posts", id));
        const updatedPosts = postList.filter((post) => post.id !== id);
        setPostList(updatedPosts);
    };

    return (
        <div className="homePage">
            {postList.map((post) => {
                return (
                    <div className="postContents" key={post.id}>
                        <div className="postHeader">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="postTextContainer">{post.postText}</div>
                        <div className="nameAndDeleteButton">
                            <h3>@{post.author.username}</h3>
                            <button onClick={() => handleDelete(post.id)}>削除</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { show } from "../../services/hootService";
import CommentForm from '../CommentForm/CommentForm'
import { UserContext } from "../../contexts/UserContext";

const HootDetails = (props) => {
    const { user } = useContext(UserContext);
    const { hootId } = useParams()
    const [hoot, setHoot] = useState(null)

    const handleAddComment = async (commentFormData) => {
        const newComment = await createComment(hootId, commentFormData);
        setHoot(prev => ({
            ...prev, 
            comments: [...hoot.comments, newComment]
        }))
    }


    useEffect(() => {
        const fetchHoot = async () => {
          const hootData = await hootService.show(hootId);
          setHoot(hootData);
        };
        fetchHoot();
      }, [hootId]);


    return hoot && 
        <main>
            <section>
                <header>
                    <p>{hoot.category.toUpperCase()}</p>
                    <h1>{hoot.title}</h1>  
                    <p>
                        {`${hoot.author.username} posted on
                        ${new Date(hoot.createdAt).toLocaleDateString()}`}
                    </p>
                    {hoot.author?._id === user._id && (
                        <>
                            <Link to={`/hoots/${hootId}/edit`}>Edit</Link>
                            
                            <button onClick={() => props.handleDeleteHoot(hootId)}>
                                Delete
                            </button>
                        </>
                    )}
                </header>
                <p>{hoot.text}</p>
            </section>
            <section>
                <h2>Comments</h2>
                <CommentForm handleAddComment={handleAddComment} />

                {!hoot.comments.length && <p>There are no comments.</p>}
                
                {hoot.comments.map((comment) => (
                    <article key={comment._id}>
                        <header>
                            <p>
                                {`${comment.author.username} posted on
                                ${new Date(comment.createdAt).toLocaleDateString()}`}
                            </p>
                        </header>
                        <p>{comment.text}</p>
                    </article>
        ))}

            </section>
        </main>;
  };
  
export default HootDetails;
  
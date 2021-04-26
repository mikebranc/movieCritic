import React, { useState, useEffect, useContext } from 'react';
import { firestore } from '../firebase/firebase.util';
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from '../UserProvider'

export default function Comments(props){
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = useContext(UserContext)
    const {reviewId} = props;

    useEffect(() => {
        setLoading(true);
        (async () => {
          try {
            const postsRef = firestore.collection("reviews").doc(reviewId).collection('comments');
            const postsDoc = await postsRef.get();
            const data = postsDoc.docs.map((item) => ({
              id: item.id,
              ...item.data(),
            }));
            setComments(data);
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        })();
      }, [setLoading, setComments]);

    return(
        <div>
                  {comments
                      && comments.map((comment) =>(
                            <p style={{ margin: '0' }}>
                              <b>{comment.user.username}</b> {comment.comment}
                          </p>
                  ))}
                  </div>
    );
}
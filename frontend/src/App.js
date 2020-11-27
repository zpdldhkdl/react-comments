import React, {useEffect, useState} from 'react';
import Logo from "./components/Logo";
import 'bootstrap/dist/css/bootstrap.css';
import CommentForm from "./components/commentForm/CommentForm";
import CommentList from "./components/commentList/CommetList";
import axios from 'axios';
import {Badge, Row, Alert} from "react-bootstrap";
import timeForToday from './module/timeForToday';

export default function App() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const addComment = async(nickname, article) => {
        const response = await axios({
            url: process.env.REACT_APP_SERVER_URL + '/api/comment',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                nickname: nickname,
                article: article,
            }
        });

        if(response.status !== 200)
            return false;

        return true;
    };

    const getComment = async () => {
        const response = await axios({
            url: process.env.REACT_APP_SERVER_URL + '/api/comment/comments',
            method: 'GET',
        });

        if(response.status !== 200)
            return;

        const retComment = await response.data.map(comment => {
            return {
                id: comment.id,
                nickname: comment.nickname,
                article: comment.article,
                time: timeForToday(comment.createdAt),
            }
        });

        setComments(retComment);

        setLoading(false);
    };


    useEffect(() => {
        getComment();
    }, []);

  return (
      <div>
        <Logo/>
        <Row>
          <div className='col-4 pt-3 pl-5 border-right'>
              <h6> React에 대한 댓글을 작성해주세요. </h6>
              <CommentForm addComment={addComment} getComment={getComment}/>
          </div>

            <div className='col-8 pt-3'>
                <h4>
                    Comments <Badge variant='primary'>{comments.length}</Badge>
                </h4>
                { loading ?
                    <Alert variant='info' className='text-center w-25'>
                        Loading . . .
                    </Alert>
                    :
                    <CommentList comments={comments} />
                }
            </div>
        </Row>
      </div>
  );
};

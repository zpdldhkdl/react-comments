import React from 'react';
import Comment from "./Comment";
import {Alert} from "react-bootstrap";

export default function CommentList({ comments }) {
    return (
        <div className='w-75'>
            {comments.length === 0 ? (
                <Alert variant='info' className='text-center'>
                    첫 번째 댓글을 작성해주세요.
                </Alert>
            ) : null}
            {
                comments.map((comment) =>
                    <Comment
                        nickname={comment.nickname}
                        article={comment.article}
                        time={comment.time}
                        key={comment.id}
                    />
                )
            }
        </div>
    );
};

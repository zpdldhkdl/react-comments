import React, {useState} from 'react';
import {InputGroup, FormControl, Button, Alert} from "react-bootstrap";
import {
    ERROR_MESSAGE,
    ADD_COMMENT_ERROR_MESSAGE,
    ADD_COMMENT_SUCCESS_MESSAGE
} from './message';

export default function CommentForm({ addComment, getComment }) {
    const [nickname, setNickname] = useState('');
    const [article, setArticle] = useState('');
    const [isError, setIsError] = useState(false);
    const [isAddCommentError, setIsAddCommentError] = useState(false);
    const [isAddCommentSuccess, setIsAddCommentSuccess] = useState(false);

    const changeNickname = (e) => {
        setNickname(e.target.value);
    };

    const changeArticle = (e) => {
        setArticle(e.target.value);
    };

    const resetFormContent = () => {
        setNickname('');
        setArticle('');
    }

    const onSubmit = async () => {
        const check = checkFormText();

        if(!check) {
            setIsError(true);
            return;
        }

        const returnAddComment = await addComment(nickname, article);

        if(!returnAddComment) {
            setIsAddCommentError(true);
            return;
        }

        resetFormContent();
        setIsAddCommentSuccess(true);
        getComment();
    };

    const checkFormText = () => {
        if (nickname !== '' && article !== '')
            return true;

        return false;
    };

    const onErrorMessage = (message, setFunc) => {
        onTimeOut(setFunc);
        return (
            <div>
                <Alert variant='danger'>
                    {message}
                </Alert>
            </div>
        );
    };

    const onSuccessMessage = (message, setFunc) => {
        onTimeOut(setFunc);
        return (
            <div>
                <Alert variant='success'>
                    {message}
                </Alert>
            </div>
        );
    };

    const onTimeOut = (setFunc) => {
        setTimeout(() => setFunc(false), 3000);
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="닉네임을 입력해주세요."
                    aria-label="Nickname"
                    aria-describedby="Nickname"
                    onChange={changeNickname}
                    value={nickname}
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl
                    as='textarea'
                    onChange={changeArticle}
                    value={article}
                />
            </InputGroup>
            {isError ? onErrorMessage(ERROR_MESSAGE, setIsError) : null}
            {isAddCommentError ? onErrorMessage(ADD_COMMENT_ERROR_MESSAGE, setIsAddCommentError) : null}
            {isAddCommentSuccess ? onSuccessMessage(ADD_COMMENT_SUCCESS_MESSAGE, setIsAddCommentSuccess) : null}
            <Button className='w-25' onClick={onSubmit}>
                입력 &#10148;
            </Button>
        </div>
    );
}

import React, {useState} from 'react';
import {InputGroup, FormControl, Button, Alert} from "react-bootstrap";

export default function CommentForm({ addComment }) {
    const [nickname, setNickname] = useState('');
    const [article, setArticle] = useState('');
    const [isError, setIsError] = useState(false);

    const changeNickname = (e) => {
        setNickname(e.target.value);
    };

    const changeArticle = (e) => {
        setArticle(e.target.value);
    };

    const onSubmit = () => {
        const check = checkFormText();

        if(check) {
            addComment(nickname, article);
            return;
        }

        setIsError(true);
    };

    const checkFormText = () => {
        if (nickname !== '' && article !== '')
            return true;

        return false;
    };

    const onErrorMessage = () => {
        onErrorTimeOut();
        return (
            <div>
                <Alert variant='danger'>
                    닉네임, 댓글은 비워둘 수 없습니다.
                </Alert>
            </div>
        )
    };

    const onErrorTimeOut = () => {
        setTimeout(() => setIsError(false), 3000);
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="닉네임을 입력해주세요."
                    aria-label="Nickname"
                    aria-describedby="Nickname"
                    onChange={changeNickname}
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl
                    as='textarea'
                    onChange={changeArticle}
                />
            </InputGroup>
            {isError ? onErrorMessage() : null}
            <Button className='w-25' onClick={onSubmit}>
                입력 &#10148;
            </Button>
        </div>
    );
}

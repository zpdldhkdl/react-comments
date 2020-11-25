import React, {useState} from 'react';
import {InputGroup, FormControl, Button, Alert} from "react-bootstrap";

export default function CommentForm() {
    const [nickname, setNickname] = useState('');
    const [comment, setComment] = useState('');
    const [isError, setIsError] = useState(false);

    const changeNickname = (e) => {
        setNickname(e.target.value);
    };

    const changeComment = (e) => {
        setComment(e.target.value);
    };

    const onSubmit = () => {
        const check = checkFormText();

        if(check) {
            //todo: post to server
        }

        setIsError(true);
    };

    const checkFormText = () => {
        if (nickname !== '' && comment !== '')
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
                    onChange={changeComment}
                />
            </InputGroup>
            {isError ? onErrorMessage() : null}
            <Button className='w-25' onClick={onSubmit}>
                입력 &#10148;
            </Button>
        </div>
    );
}

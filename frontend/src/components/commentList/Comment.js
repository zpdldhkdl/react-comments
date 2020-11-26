import React from 'react';
import {Alert} from "react-bootstrap";

export default function Comment({ nickname, article}) {
    return (
        <Alert className='shadow-sm' variant='primary'>
            <Alert.Heading>{nickname}</Alert.Heading>
            {article}
        </Alert>
    );
}

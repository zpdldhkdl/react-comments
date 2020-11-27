import React from 'react';
import {Alert} from "react-bootstrap";

export default function Comment({ nickname, article, time}) {
    return (
        <Alert className='shadow-sm' variant='primary'>
            <Alert.Heading>
                {nickname}
                <p className='d-inline-block pl-2' style={{fontSize: '10px'}}>
                    {time}
                </p>
            </Alert.Heading>
            {article}
        </Alert>
    );
}

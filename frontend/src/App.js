import React, { useState } from 'react';
import Logo from "./components/Logo";
import 'bootstrap/dist/css/bootstrap.css';
import CommentForm from "./components/commentForm/CommentForm";

export default function App() {
    const [isLoading, setIsLoading] = useState('true');
  return (
      <div>
        <Logo/>
        <div className='row'>
          <div className='col-4 pt-3 pl-5 border-right'>
              <h6> React에 대한 댓글을 작성해주세요. </h6>
              <CommentForm />
          </div>

            <div className='col-8 pt-3'>
                <h4>
                    Comments
                </h4>
                
            </div>
        </div>
      </div>
  );
};

import React from 'react'
import Student from ".Student";

const app = () => {
  return (
    <div>
        <h1>props example</h1>
<Student name="prateek" age={23} />
<Student name="hemlata" age={22} />      
    </div>
  )
}

export default app;

import * as React from 'react';
import '../styles/form.css';

const Form =
    return (
      <form action="http://localhost:3000/cows" method="post">
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="description" placeholder="description" />
        <button type="submit">submit cow</button>
      </form>
    );


export default Form;

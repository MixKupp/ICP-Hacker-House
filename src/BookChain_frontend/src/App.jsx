import { useState } from 'react';
import { BookChain_backend } from 'declarations/BookChain_backend';
import BookReaderUI from './book-reader-ui';
import './index.css';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    BookChain_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <BookReaderUI />
    </main>
  );
}

export default App;

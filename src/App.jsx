import { useState,useEffect } from 'react'
import Connector from './SignalRConnection'
const Message = (props) => {
    const {result} = props
    return (
        <div className='block'>
            <span >Message: {result}</span><br></br>
        </div>
    )
}

function App() {
    const [results, setResults] = useState([])
    const { events } = Connector()
    useEffect(() => {
      events((message) => setResults([
          ...message
      ]));
    }, [results]);

  return (
    <>
      <main className='container'>
        <div className='card'>
            <header className='card-header'>
                <p class="card-header-title">
                    Admin Chat App
                </p>
            </header>
            <div className='card-content'>
                <div className='block'>
                    <p>Chat view</p>
                    <p>Signalr Chat</p>
                </div>
                {results.map((result, index) => (
                    <Message result={result} key={index}/>
                ))}
            </div>
        </div>
        
        
        
      </main>
      <footer class="footer">
        <div class="content has-text-centered">
            <p>
            <strong>Admin Chat</strong> by <a href="#">UG project group</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>
            </p>
        </div>
      </footer>

    </>
  )
}

export default App

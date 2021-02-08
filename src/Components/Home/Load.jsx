import axios from 'axios';
import {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import Posts from './Posts';
function Load(){
    const [intervalMs, setIntervalMs] = useState(1000)
    const { status, data, error} = useQuery(
      'cach',
      async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return res.data
      },
      {
        refetchInterval: intervalMs,
      }
    )
    
    if (status === 'loading') return <h1>Loading...</h1>
    if (status === 'error') return <span>Error: {error.message}</span>
  
    return (
    <div>
        {data && data.length > 0 && <Posts posts={data} />}
    </div>
    )
}
export default Load;
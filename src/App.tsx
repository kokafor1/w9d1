export default function App(){
  const firstName: string = 'Ken';
  const lastName: string = 'Okafor';
  const isLoggedIn : boolean  = true;
  const posts: {id:number, title: string}[]= [
    {id: 1, title: 'Yooo'},
    {id: 2 , title: 'GLazzze'},
    {id: 3 , title: 'jcngknkf'}
  ]
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{isLoggedIn? `Welcome back ${firstName} ${lastName}` : 'Please log in or Sign Up'} </h2>
      {posts.map(p => <h4 key={p.id}>{p.title}</h4>)}
    </div>
  )
}
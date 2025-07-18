export function App(){
  let result 
  let errmsg=''

  try{
    let a=10
    let b=0
    if(b===0){
      throw new Error('spmething went wrong')
    }
    result=a/b
  }

  catch(err){
    errmsg=err.message

  }

  return<>
  {errmsg? <p>{errmsg}</p> : <h1>Ressult is : {result}</h1>}</>


}
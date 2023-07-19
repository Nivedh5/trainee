export const Blogs=(props)=>{
    const arr=props.arr
    const click=props.click
    return(
    
        
            arr.map((arr)=>{
              return(
            <div key={arr.id}>
              {
                  console.log(arr.id)
              }
                <h1>{arr.title}</h1>
                <p>{arr.body}</p>
                <button onClick={()=>click(arr.id)}>Delete</button>
          </div> 
              )
            })
          
    )
}
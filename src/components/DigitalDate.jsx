export const DigitalDate=()=>{
    const date = new Date()
    return(
        <>
        <div>
            <span>Date:</span>
            <h1>{date.toLocaleDateString()}</h1>
          </div>
        </>
    )
}
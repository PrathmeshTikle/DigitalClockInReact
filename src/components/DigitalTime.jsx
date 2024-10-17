export const DigitalTime=()=>{
    const time = new Date()
    return(
        <>
        <div>
            <span>Current Timing:</span>
           <h1>{time.toLocaleTimeString()}</h1>
        </div>
        
        </>
    )
}
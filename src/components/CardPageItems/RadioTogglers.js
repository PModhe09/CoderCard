export default function RadioTogglers({options,OnChange}){
    return(
        <div className="radio-togglers shadow-md">
        {
            options.map(option=>(
            <label>
              <input type="radio" name="bgType" value={option.name}/>
              <span>{option.label}</span>
            </label>
            ))
        }  
        </div>
    )
}
export default function RadioTogglers({options,onChange,defaultValue}){
    return(
        <div className="radio-togglers shadow-md">
        {
            options.map(option=>(
            <label>
              <input type="radio" name="coverType" defaultChecked={defaultValue === option.value} value={option.value} onClick={ev=>onChange(ev.target.value)}/>
              <span>{option.label}</span>
            </label>
            ))
        }  
        </div>
    )
}
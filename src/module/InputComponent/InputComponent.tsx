import styless from './InputComponent.module.scss'


interface inputPropsType {
    placeholder : string;
    inputValue : string;
    inputOnChange : (inputValue : string) => void;
    inputType : string;
}

const InputComponent =(props: inputPropsType)=>{
    const {placeholder, inputValue, inputOnChange,inputType} = props;
    return(
              <div >
                <input  className={styless['input']}
                type={inputType}
                
                onChange={(e)=> inputOnChange(e.target.value)}
                value={inputValue}
                placeholder={placeholder}
                
                />
              </div>
    )
}

export default InputComponent;
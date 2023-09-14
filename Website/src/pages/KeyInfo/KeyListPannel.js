import './KeyInfoPage.css';




function createKeyListElements(keyNames){

    let temp = keyNames.map(item => {
        console.log("item",item)
        return <input type="submit" key={item.id} value={item.name}/>

    });
    console.log(temp);
    return <div>{temp}</div>
}

/**
 * Pannel displaying api key info and search options
 */
 function KeyListPannel(props){
    return (
      <div className="KeyListPannel">
        <div className ="searchField">
            <input type="text" id="searchField" name="fname"/>
            <input type="submit" value="search"/>
        </div>
        <div className='keyList'>
            {createKeyListElements(props.list)}
        </div>
        <h1>1</h1>
  
      </div>
    )
  }
  
  export default KeyListPannel;

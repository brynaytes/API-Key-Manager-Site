import './KeyInfoPage.css';

/**
 * Lists out keys
 */
function KeyListPannel(){
  return (
    <div className="KeyListPannel">
      <h1>1</h1>

    </div>
  )
}

/**
 * Gives info about selected key
 */
function KeyInfoPannel(){
  return (
    <div className="KeyInfoPannel">
      <h1>2</h1>
    </div>
  )
}

/**
 * Lists usage statistics about selected key
 */
function KeyStatsPannel(){
  return (
    <div className="KeyStatsPannel">
            <h1>3</h1>

    </div>
  )
}

function KeyInfoPage() {
  return (
    <div className="KeyInfoPage">
      {  KeyListPannel()}
      {  KeyInfoPannel()}
      {  KeyStatsPannel()}

    </div>
  );
}

export default KeyInfoPage;

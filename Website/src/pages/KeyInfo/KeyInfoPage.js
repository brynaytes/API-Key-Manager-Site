import './KeyInfoPage.css';

import KeyListPannel from './KeyListPannel';
import KeyInfoPannel from './KeyInfoPannel';
import KeyStatsPannel from './KeyStatsPannel';

import mockdata from '../../mock/key-list'

let keyObjectList

function getKeyInfo() {
  let temp = [];
  for (let i = 0; i < mockdata.items.length; i++) {
    temp.push(mockdata.items[i]);
  }
  console.log(temp);

  keyObjectList = temp;
  console.log("keys", keyObjectList);
}


function KeyInfoPage() {
  getKeyInfo()
  return (
    <div className="KeyInfoPage">
      < KeyListPannel list={keyObjectList} />
      < KeyInfoPannel />
      < KeyStatsPannel />

    </div>
  );
}

export default KeyInfoPage;

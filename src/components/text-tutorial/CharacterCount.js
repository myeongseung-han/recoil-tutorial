import React from "react";
import {useRecoilValue} from "recoil";
import { charCountState } from "../../recoil/text-tutorial/selectors";

function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }

export default CharacterCount;
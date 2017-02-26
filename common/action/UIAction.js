//首页的UI样式
export const INDEX_CHANGE_IMG_DEPTH= "INDEX_CHANGE_IMG_DEPTH";
export const INDEX_CHANGE_LOGO1_DEPTH= "INDEX_CHANGE_LOGO1_DEPTH";
export const INDEX_CHANGE_LOGO2_DEPTH= "INDEX_CHANGE_LOGO2_DEPTH";
export const INDEX_CHANGE_LOGO3_DEPTH= "INDEX_CHANGE_LOGO3_DEPTH";

//针对papaer的阴影样式变化
export const IndexChangeImgDepth=(depth)=>{
  return {
    type:INDEX_CHANGE_IMG_DEPTH,
    imgDepth:depth//阴影深度为2
  }
}

export const IndexChangeLogo1Depth=(depth)=>{
  return {
    type:INDEX_CHANGE_LOGO1_DEPTH,
    logo1Depth:depth//阴影深度为2
  }
}

export const IndexChangeLogo2Depth=(depth)=>{
  return {
    type:INDEX_CHANGE_LOGO2_DEPTH,
    logo2Depth:depth//阴影深度为2
  }
}

export const IndexChangeLogo3Depth=(depth)=>{
  return {
    type:INDEX_CHANGE_LOGO3_DEPTH,
    logo3Depth:depth//阴影深度为2
  }
}


//Drawer状态的变化
export const CHANGE_DRAWER_STATUS = "CHANGE_DRAWER_STATUS";

export const DrawerChangeStatus=()=>{
  return {
    type:CHANGE_DRAWER_STATUS
  }
}


//针对post页的分页是否禁止样式
export const CHANGE_NEXT_STATUS = "CHANGE_NEXT_STATUS";

export const ChangeNextStatus=()=>{
    return {
      type:CHANGE_NEXT_STATUS
    }
}
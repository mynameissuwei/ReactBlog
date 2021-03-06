import {
  //indexpage
  INDEX_CHANGE_IMG_DEPTH,
  INDEX_CHANGE_LOGO1_DEPTH,
  INDEX_CHANGE_LOGO2_DEPTH,
  INDEX_CHANGE_LOGO3_DEPTH,
  //Drawer
  CHANGE_DRAWER_STATUS,
  //Dialog
  LOGIN_OPEN_DIALOG,
  //create页Snackbar 状态
  CREATE_OPEN_SNACKBAR,
  REMOVE_OPEN_SNACKBAR,
  UPDATA_OPEN_SNACKBAR

} from '../action/UIAction';

const initialState = {//UI组件的状态
  drawer:{
    status:false
  },
  indexpage:{},
  loginDialog:{
    status:false,
  },
  createSnackbar:false,
  removeSnackbar:false,
  updateSnackbar:false,
};

const UIReducer=(state=initialState,action)=>{
  switch(action.type){
    //首页Indexpage样式
    case INDEX_CHANGE_IMG_DEPTH:
      return Object.assign({},state,{
        indexpage:Object.assign({},state.indexpage,{
          imgDepth:action.imgDepth
        })
    });
    case INDEX_CHANGE_LOGO1_DEPTH:
      return Object.assign({},state,{
        indexpage:Object.assign({},state.indexpage,{
          logo1Depth:action.logo1Depth
        })
    });

    case INDEX_CHANGE_LOGO2_DEPTH:
      return Object.assign({},state,{
        indexpage:Object.assign({},state.indexpage,{
          logo2Depth:action.logo2Depth
        })
      });
    
     case INDEX_CHANGE_LOGO3_DEPTH:
      return Object.assign({},state,{
        indexpage:Object.assign({},state.indexpage,{
          logo3Depth:action.logo3Depth
        })
      });
    //Drawer状态的变化
    case CHANGE_DRAWER_STATUS:
      return Object.assign({},state,{
        drawer:Object.assign({},state.drawer,{
          //取反，表明取消状态,刚开始status是没有状态的，所以进行判断
          status:state.drawer.status==='undefined'?true:!state.drawer.status
        })
      });
    //登陆Dialog
    case LOGIN_OPEN_DIALOG:
      return Object.assign({},state,{
        loginDialog:Object.assign({},state.loginDialog,{
          //取反，表明取消状态,刚开始status是没有状态的，所以进行判断
          status:state.loginDialog.status==='undefined'?true:!state.loginDialog.status
        })
      });
    case CREATE_OPEN_SNACKBAR:
      return Object.assign({},state,{
        //取反，表明取消状态,刚开始status是没有状态的，所以进行判断
        createSnackbar:!state.createSnackbar
      });
    case REMOVE_OPEN_SNACKBAR:
      return Object.assign({},state,{
        removeSnackbar:!state.removeSnackbar
      });
     case UPDATA_OPEN_SNACKBAR:
      return Object.assign({},state,{
        updateSnackbar:!state.updateSnackbar
      });
    default:
      return state;
  }
}

export default UIReducer;
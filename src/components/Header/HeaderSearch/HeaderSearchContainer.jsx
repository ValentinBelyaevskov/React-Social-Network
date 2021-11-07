import { connect } from "react-redux";
import { changeHeaderSearchTextActionCreator, headerSearchActionCreator } from "../../../redux/actionCreators/headerActionCreators";
import HeaderSearch from "./HeaderSearch";


const mapStateToProps = state => {
   return {
      logo: state.header.UI.searchLogo,
      text: state.header.searchText,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      changeInputText: text => {
         let action = changeHeaderSearchTextActionCreator(text);
         dispatch(action);
      },
      headerSearch: () =>  {
         let action = headerSearchActionCreator();
         dispatch(action)
      },
   }
}

const HeaderSearchContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)

export default HeaderSearchContainer
import { connect } from "react-redux"
import getFormattedDate from "../../../../../lib/getFormattedDate"
import PostItem from "./PostItem"

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      getFormattedDate: (dateStr, page) => {
         return getFormattedDate(dateStr, page);
      }
   }
}

export default connect(null, mapDispatchToProps)(PostItem);
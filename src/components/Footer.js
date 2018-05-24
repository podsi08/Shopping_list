import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from "../actions/index";
import DeleteActionBtn from "../containers/DeleteActionBtn";


class Footer extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className='footer row'>
                    <span>Show: </span>
                    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                        All
                    </FilterLink>
                    <FilterLink filter={VisibilityFilters.SHOW_TO_BUY}>
                        To Buy
                    </FilterLink>
                    <FilterLink filter={VisibilityFilters.SHOW_BOUGHT}>
                        Bought
                    </FilterLink>
                </div>
                <div className='row'>
                    <DeleteActionBtn onClick={() => {this.props.deleteBought()}} name='Remove bought'/>
                    <DeleteActionBtn onClick={() => {this.props.deleteAll()}} name='Remove all'/>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;
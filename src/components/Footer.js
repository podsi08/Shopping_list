import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from "../actions/index";


class Footer extends React.Component {
    render(){
        return(
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
        )
    }
}

export default Footer;
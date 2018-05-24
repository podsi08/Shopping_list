import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from "../actions/index";
import DeleteActionBtn from "../containers/DeleteActionBtn";
import {DeleteOptions} from "../actions";


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
                <div className='footer row'>
                    {/*ownProps toDelete are used in DeleteActionBtn*/}
                    <DeleteActionBtn toDelete={DeleteOptions.DELETE_BOUGHT}
                                     onClick={() => this.props.onClick()}
                                     name='Remove bought'/>
                    <DeleteActionBtn toDelete={DeleteOptions.DELETE_ALL}
                                     onClick={() => this.props.onClick()}
                                     name='Remove all'/>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;
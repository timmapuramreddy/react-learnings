import React, { Fragment} from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    gotoStore = (event) => {
        event.preventDefault();
        // console.log(this);
        const storeName = this.myInput.current.defaultValue;
        console.log(storeName);
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
               <form className="store-selector" onSubmit={this.gotoStore} >
                    <h2> Please Enter a Store</h2>
                    <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue = {getFunName()}/>
                    <button type="submit">Visit Store -></button>
                </form>
            )
    }
}

export default StorePicker;
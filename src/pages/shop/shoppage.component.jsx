import React, { Component } from 'react';
import './shoppage.styles.scss';
import SHOP_DATA from './shop.data';
//import Directory from '../../components/directoty/directoty.component'
class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shoppage" >
                <h1>Shop Page</h1>
            </div>);
    }
}
export default ShopPage;
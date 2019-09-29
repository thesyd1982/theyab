import React, { Component } from 'react';
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'


// const clientId = '3a58bee0e1d353516a09f7a5d87e6e54d9dc278b14583ef2b8d91ae5b0bd575e';
// let endpoint = 'https://unsplash.com/search/photos/';

var API_KEY = '6728659-8fe08feeffece786697ffd9be';
//var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('Mens ');

//URL = 'https://cdn.pixabay.com/photo/2016/09/03/23/18/rose-1642970_150.jpg'
let THEMES = ['HATS', 'JACKETS', 'SNEAKERS', 'WOMANS', 'MENS'];
class Directory extends Component {
    constructor() {
        super()
        this.state = {
            photos: [],

            sections: [
                {
                    id: 1,
                    title: 'HATS',
                    subtitle: 'SHOP NOW',
                    imgUrl: 'https://cdn.pixabay.com/photo/2019/09/23/01/10/hat-4497323_960_720.jpg'
                },
                {
                    id: 2,
                    title: 'JACKETS',
                    subtitle: 'SHOP NOW',
                    imgUrl: 'https://cdn.pixabay.com/photo/2014/08/26/21/49/shirts-428618_960_720.jpg'
                },
                {
                    id: 3,
                    title: 'SNEAKERS',
                    subtitle: 'SHOP NOW',
                    imgUrl: 'https://cdn.pixabay.com/photo/2017/07/31/11/33/rooftops-2557490_960_720.jpg'
                },
                {
                    id: 4,
                    title: 'WOMENS',
                    subtitle: 'SHOP NOW',
                    imgUrl: 'https://cdn.pixabay.com/photo/2017/08/05/12/19/dress-2583113_960_720.jpg',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'MENS',
                    subtitle: 'SHOP NOW',
                    imgUrl: 'https://cdn.pixabay.com/photo/2016/07/13/16/00/box-1514845_960_720.jpg'
                    ,
                    size: 'large'
                }
                ,],
            query: 'MEN'

        }
    }

    render() {
        return (<div className='directory-menu'>
            {


                this.state.sections.map(
                    ({ id, title, subtitle, imgUrl, size }) =>
                        (<MenuItem key={id} title={title} subtitle={subtitle} imgUrl={imgUrl} size={size} />
                        ))
            }
        </div>)
    }


    componentDidMount() {

        this.setState({ query: 'MENS' })

        const imgUrl = this.getLargeImageUrl();

        this.setState({ imgUrl: imgUrl })
        console.log('componentDidMount : ' + this.state.query)

    }
    getLargeImageUrl = () => {

        fetch("https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(this.state.query))
            .then(response => response.json())
            .then(jsonResponse => {


                console.log(jsonResponse.hits[0].largeImageURL);
                return jsonResponse.hits[0].largeImageURL;
            })
    }




}
export default Directory;
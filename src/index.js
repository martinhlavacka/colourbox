import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import Carousel from './components/Carousel'
import { move, getImages } from './helpers';
import './index.css'; 

/**
 * App componet (default)
 */
class App extends Component{

    /**
     * Inital component states - empty array for all the images fetched from Skyfish API 
     * and default amount of images to display - variable depending on screen size
     */
    state = {
        items: [],
        amount: this.setEssentialDimensions()
    }


    async componentDidMount(){
        const data = await getImages();
        this.setState({
            items:data,
        })

        /**
         * Event listener responsible for re-rendering the carousel on windows resize after the initial page load
         */
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Handler for both forward and back buttons
     */
    handleMoveArray = (direction) => {
        this.setState({
            items: move(this.state.items, direction)
        })
    }

    /**
     * Specification of how many images should be displayed at different windows
     * width sizes on inital component load
     */
    setEssentialDimensions(){
        if(window.innerWidth > 1280) {
            return 5;
        }  
        else if(window.innerWidth > 870) {
            return 3;
        } 
        else if(window.innerWidth > 600) {
            return 2;
        } 
        else {
            return 1;
        }  
    }

    /**
     * Specification of how many images should be displayed at different windows
     * width sizes when page is resized after the inital component load
     */
    updateDimensions() {
        if(window.innerWidth > 1280) {
            this.setState({
                amount: 5
            })
        }  
        else if(window.innerWidth > 870) {
            this.setState({
                amount: 3
            })
        } 
        else if(window.innerWidth > 600) {
            this.setState({
                amount: 2
            })
        } 
        else {
            this.setState({
                amount: 1
            })
        }
    }

    /**
     * Rendering the component with all the related child components - Carousel & Card
     */
    render(){
        return (
            <div>
                <Carousel moveArray={this.handleMoveArray} pictures={this.state.items} amount={this.state.amount}/>
                <button className="navigation previous" onClick={() => this.handleMoveArray('left')}><ion-icon name="arrow-back"></ion-icon></button>
                <button className="navigation next" onClick={() => this.handleMoveArray('right')}><ion-icon name="arrow-forward"></ion-icon></button>
            </div>
        );
    }

}

/**
 * Rendering final component data into the #carousel on index.html
 */
ReactDOM.render(
    <App />,
    document.getElementById('carousel')
 );

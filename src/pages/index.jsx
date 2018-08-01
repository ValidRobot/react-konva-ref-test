import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import Konva from 'konva';

import ColoredRect from "../components/colorRect"



class Main extends Component {
    componentDidMount() {
        console.log(this.refs)
        // log stage react wrapper
        console.log(this.refs.stage);
        // log Konva.Stage instance
        console.log(this.refs.stage.getStage());
    }

    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <ColoredRect />
                </Layer>
            </Stage>
        );
    }
}


export default Main;

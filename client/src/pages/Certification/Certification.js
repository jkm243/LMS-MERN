import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import './Certification.css'

class Certification extends Component {
    certificateWrapper = React.createRef();
    state = {
        Name: ""
    };
    render() {
        return (
            <div id="App">
                <div className="Meta">
                    <h1>Сертификат</h1>
                    <p>Пожалуйста, введите свое имя.</p>
                    <input
                        type="text"
                        placeholder="Пожалуйста, введите свое имя..."
                        value={this.state.Name}
                        onChange={(e) => {
                            this.setState({ Name: e.target.value });
                        }}
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            exportComponentAsPNG(this.certificateWrapper, {
                                html2CanvasOptions: { backgroundColor: null }
                            });
                        }}
                    >
                        Скачать
                    </button>
                </div>

                <div id="downloadWrapper" ref={this.certificateWrapper}>
                    <div id="certificateWrapper">
                        <p>{this.state.Name}</p>
                        <img src="https://i.postimg.cc/HnTJndwr/diplom.png" alt="Certificate" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Certification;

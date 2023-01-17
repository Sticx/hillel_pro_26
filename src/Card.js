import React from "react";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            technologies: props.technologies,
        };
        console.log(...this.state.technologies)
        console.log(props.technologies)
    }

    addItem = (event) => {
        event.preventDefault();
        this.setState(
            {
                technologies: [
                    ...this.state.technologies,
                    event.target[0].value,
                ],
            },
            () => {
                event.target[0].value = "";
            }
        );
    };

    render() {
        let userName = 'Vladislav';
        let userLastname = 'Sokolov'
        return (
            <div className="card-inner">
                <div className="card-inner__username">Name: {userName}</div>
                <div className="card-inner__lastname">
                    Last Name:{userLastname}
                </div>
                <form
                    action="#"
                    className="card-inner__form js--form"
                    onSubmit={this.addItem}
                >
                    <input type="text" className="js--form"></input>
                    <button>добавить</button>
                </form>
                <div className="card-inner__technologies">
                    Learned Technologies :
                    {this.state.technologies.map((tech,i) => (
                        <div className="card-inner__technologies-item" key={tech + i}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
import React from "react";
import PropTypes from "prop-types";
export const Header = (props) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>

                        {
                            (props.searchBar === true) ?
                                <form className="d-flex">
                                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                                    <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                                </form> : <div>No searchBar</div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

//If user does not any props from parent then this will be displayed
Header.defaultProps = {
    title: "This is My Todo App"
}
// What Are PropTypes In React? # PropTypes are a mechanism to 
// ensure that components use the correct data type and pass the right data, 
// and that components use the right type of props, 
// and that receiving components receive the right type of props.
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired //If not given the params for isRequired props then shows props error
    //     //Warning: Failed prop type: The prop `searchBar` is marked as required in `Header`, but its value is `undefined`.
    // Header@http://localhost:3000/static/js/main.chunk.js:418:11
}
// if you pass number instead of string then you will get the following error
// Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`.
// Header@http://localhost:3000/static/js/main.chunk.js:422:11
// App



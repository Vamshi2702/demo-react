import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <div className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                style={{ marginRight: 200, color: props.mode === 'dark' ? 'white' : 'black', cursor: 'pointer' }}>Themes
                            </div>
                            <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1" style={{ cursor: 'pointer' }}>
                                <li className="dropdown-item" onClick={() => props.toggleMode('dark')}>Dark Theme</li>
                                <li className="dropdown-item" onClick={() => props.toggleMode('summer')}>Summer Theme</li>
                                <li className="dropdown-item" onClick={() => props.toggleMode('winter')}>Winter Theme</li>
                                <li className="dropdown-item" onClick={() => props.toggleMode('greeny')}>Greeny Theme</li>
                                <li className="dropdown-item" onClick={() => props.toggleMode('red')}>Red Theme</li>
                                <li className="dropdown-item" onClick={() => props.toggleMode('default')}>Default Theme</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

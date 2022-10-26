import React from 'react';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { images: [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)

    }

    async onSearchSubmit(entry) {
        await fetch(`https://pixabay.com/api/?key=30836534-8eb7e2070cfe19a8102bf982c&q=${entry}&image_type=photo`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({images: json.hits})
            })
    }

    render() {
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }

}

export default App;
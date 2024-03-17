import searchIcon from './search-icon.svg';
import macbook from './macbook.png';


export function Search () {
    return (
        <div className='searchBar'>
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt='search icon' />
        </div>
    );
}

export function Product () {
    return (
        <div className='grid-item'>
            <img alt='product' src={macbook} />
            <h4>title</h4>
            <p>description</p>
            <button>Add to Cart</button>
        </div>
    );
}

export function Products () {
    return (
        <div className='grid'>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}

export function Content () {
    return (
        <main className='main'> 
            <Search/>
            <Products/>
        </main>
    );
}
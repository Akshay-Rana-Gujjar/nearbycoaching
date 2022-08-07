import {IoSearch} from 'react-icons/io5'

export default function SearchBar(){

    return <>
        <div className="rounded-pill border p-1 d-flex">
            <div className="search-bar__icon me-2">
                <IoSearch size={24} color={"#FFD233"}/>
            </div>
            <div className="border"></div>
            <div className="search-bar__search-input">
                <input placeholder='Search your course here' className={`  bg-transparent border-0 ps-2`}/>
            </div>
        </div>
    </>

}
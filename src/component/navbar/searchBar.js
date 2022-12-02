import { TextField } from "@mui/material" 
import "assets/css/navBar/searchBar.scss"

const SearchBar = () => {
    return (
        <div style={{ textAlign: "right", width: "50%", paddingTop: "6px" }}>
            <TextField 
                id="tableSerachBar"
                label="Table Search"
                variant="outlined"
            />
        </div>


    )
}

export default SearchBar
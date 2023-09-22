const SearchForm = ({onSubmit}) =>{
    return(
     <form onSubmit={onSubmit}>
        <input 
           name="query"
           type="text"
           autoComplete="off"
           autoFocus
           placeholder="Search movie"/>
        <button type="submit">Search</button>
     </form>
    )
}
export default SearchForm;
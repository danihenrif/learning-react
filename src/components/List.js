import Item from './Item';
function List() {
    return (
        <>
            <h1>List</h1>
            <ul>
                <Item marca = "fiat" lancamento={1985}/>
                <Item marca = "tesla" lancamento={2023}/>
                <Item />
            </ul>
        </>
    )
}
export default List;
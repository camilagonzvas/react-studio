// TODO: create a component that displays a single bakery item
export function BakeryItem({item, handleClick}) {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src = {item.image}></img>
            <button onClick={() => handleClick(item.price, item.name)}>Click me!</button>
        </div>
    )
}

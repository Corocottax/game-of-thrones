export default function LinajesGallery({list}){
    console.log(list)
    return <div>
        {list.map(item => <figure key={item.id}>
            <img src={item.logoURL} alt={item.name} />
            <figcaption>
                {item.name}
            </figcaption>
        </figure>)}
    </div>
}
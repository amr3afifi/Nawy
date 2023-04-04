import PropertyCard from './PropertyCard'

function PropertyList({props}){
    return (
        <div>
        {
            props.properties.map((property,index) => (
                <PropertyCard key={index} property={property}/>
            ))
        }
        </div>
    )
}

export default PropertyList

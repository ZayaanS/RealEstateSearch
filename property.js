//array of properties
let propertyArray = [
    {
        "PropertyId" : 0,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 400500,
        "Bedrooms" : 4,
        "Location" : "East Greenfield",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 1,
        "PropertyType" : "Apartment",
        "OfferType" : "Rent",
        "Price" : 1905,
        "Bedrooms" : 2,
        "Location" : "East Greenfield",
        "Image" : "images/apartment0.jpg",
        "Title" : "Spacious Apartment"
    },
    {
        "PropertyId" : 2,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 300500,
        "Bedrooms" : 3,
        "Location" : "West Greenfield",
        "Image" : "images/house1.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 3,
        "PropertyType" : "Apartment",
        "OfferType" : "Rent",
        "Price" : 2905,
        "Bedrooms" : 3,
        "Location" : "West Greenfield",
        "Image" : "images/apartment1.jpg",
        "Title" : "Spacious Apartment"
    },
    {
        "PropertyId" : 4,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 500500,
        "Bedrooms" : 5,
        "Location" : "East Greenfield",
        "Image" : "images/house2.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 5,
        "PropertyType" : "Apartment",
        "OfferType" : "Rent",
        "Price" : 3400,
        "Bedrooms" : 3,
        "Location" : "East Greenfield",
        "Image" : "images/apartment2.jpg",
        "Title" : "Spacious Apartment"
    },
    {
        "PropertyId" : 6,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 500500,
        "Bedrooms" : 5,
        "Location" : "Wast Greenfield",
        "Image" : "images/house3.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 7,
        "PropertyType" : "Apartment",
        "OfferType" : "Rent",
        "Price" : 3905,
        "Bedrooms" : 4,
        "Location" : "East Greenfield",
        "Image" : "images/apartment3.jpg",
        "Title" : "Spacious Apartment"
    },
    {
        "PropertyId" : 8,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 200500,
        "Bedrooms" : 2,
        "Location" : "West Greenfield",
        "Image" : "images/house4.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 9,
        "PropertyType" : "Apartment",
        "OfferType" : "Rent",
        "Price" : 2905,
        "Bedrooms" : 3,
        "Location" : "West Greenfield",
        "Image" : "images/apartment4.jpg",
        "Title" : "Spacious Apartment"
    },
    {
        "PropertyId" : 10,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 300500,
        "Bedrooms" : 3,
        "Location" : "East Greenfield",
        "Image" : "images/house5.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 11,
        "PropertyType" : "Apartment",
        "OfferType" : "Rent",
        "Price" : 3400,
        "Bedrooms" : 3,
        "Location" : "West Greenfield",
        "Image" : "images/apartment5.jpg",
        "Title" : "Spacious Apartment"
    },
    {
        "PropertyId" : 12,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 400500,
        "Bedrooms" : 4,
        "Location" : "East Greenfield",
        "Image" : "images/house6.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 13,
        "PropertyType" : "House",
        "OfferType" : "Sale",
        "Price" : 500500,
        "Bedrooms" : 5,
        "Location" : "West Greenfield",
        "Image" : "images/house7.jpg",
        "Title" : "Modern family home"
    },
];

function DisplayProperties(){
    //get property div
    let propertyDiv = document.getElementById("PropertiesDiv");
    //input from dropdowns
    let selectedOfferType = document.getElementById("OfferTypeInput").value;
    let selectedPropertyType = document.getElementById("PropertyTypeInput").value;
    let selectedBedrooms = document.getElementById("BedroomInput").value;
    let selectedPrice = document.getElementById("PriceInput").value;
    let selectedLocation = document.getElementById("LocationInput").value;

    //array for filtered properties
    //Initially have it the same as all properties so that all display on inital loading of page
    let FilteredProperties = propertyArray;

    //fill array with filtered properties
    FilteredProperties = propertyArray.filter(function(property){
        if (
            (selectedOfferType == property.OfferType || selectedOfferType == "any") && 
            (selectedPropertyType == property.PropertyType || selectedPropertyType == "any") &&
            (selectedPrice >= property.Price || selectedPrice == "any") &&
            (selectedBedrooms <= property.Bedrooms || selectedBedrooms == "any") &&
            (selectedLocation == property.Location || selectedLocation == "any")
            ){
            return property;
        }
    })
    //clear existing cards
    propertyDiv.innerHTML = "";

    //if statement to display cards if there are cards to display, else show message
    if (FilteredProperties.length > 0){
        //create cards for filtered properties
        for (let i = 0; i < FilteredProperties.length; i++){
            //create property card for each property
            propertyDiv.innerHTML += `<div class='propertyCard' >
            <img src='${FilteredProperties[i].Image}' />
            <div class='cardText'>
            <h1>${FilteredProperties[i].Title}</h1>
            <p>${FilteredProperties[i].Location}</p>
            <h2>$${FilteredProperties[i].Price}</h2>
            <hr/>
            <h4>${FilteredProperties[i].Bedrooms} bedrooms</h4>
            </div>
            </div>`;
        }
    }
    else{
        propertyDiv. innerHTML = "No properties match this search."
    }

}


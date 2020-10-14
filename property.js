//array of properties
let propertyArray = [
    {
        "PropertyId" : 0,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 300500,
        "Bedrooms" : 4,
        "Location" : "East Greenfield",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 1,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 2,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 3,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 4,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 5,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 6,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 7,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 8,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 9,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 10,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 11,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 12,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 13,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 14,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 15,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    },
    {
        "PropertyId" : 16,
        "PropertyType" : "house",
        "OfferType" : "sale",
        "Price" : 8350000,
        "Bedrooms" : 4,
        "Location" : "Cape Town",
        "Image" : "images/house0.jpg",
        "Title" : "Modern family home"
    }
];

//input from dropdowns
let selectedLocation = document.getElementById("LocationInput").value;
let selectedOfferType = document.getElementById("OfferTypeInput").value;
let selectedPropertyType = document.getElementById("PropertyTypeInput").value;
let selectedBedrooms = document.getElementById("BedroomInput").value;
let selectedPrice = document.getElementById("PriceInput").value;

//property div
let propertyDiv = document.getElementById("PropertiesDiv");

//create array called FilteredProperties that contains the properties that meet selected criteria
var FilteredProperties = propertyArray.filter(function(property){
    if (property.location === selectedLocation && 
        property.OfferType === selectedOfferType && 
        property.PropertyType === selectedPropertyType &&
        property.Bedrooms === selectedBedrooms &&
        property.Price < Number(selectedPrice) ){
      return property;
    }
  });

//if filteredproperties has properties in it, display them in cards, else display message
if (FilteredProperties.length > 0){
    //clear properties div
    propertyDiv.innerHTML = "";
    //add all filtered properties to div
    for (let i = 0; i < FilteredProperties.length; i++){
        //create property card for each property
        propertyDiv.innerHTML = `<div class='propertyCard' >
                                    <img src='${FilteredProperties[i].Image}' />
                                    <h1>${FilteredProperties[i].Title}</h1>
                                    <p>${FilteredProperties[i].location}</p>
                                    <h2>$${FilteredProperties[i].Price}</h2>
                                    <hr/>
                                    <h4>${FilteredProperties[i].Bedrooms} bedrooms</h4>
                                 </div>`;
    }
}
else{
    propertyDiv.innerHTML = `<p>There are no properties that match these criteria.</p>`
}


import React from "react"
import data from "./data"

export default function Card(props) {
  // YOUR CODE HERE

    const listingComponents = data.map( (listing) => (
        
          <tr>
          <td>
          <br/> <img src ={"/images/"+listing.coverImg} />
           </td>
           <td>
          <br/>{listing.description}
          <br/>Average Cost: ${listing.price}/Lb
          <br/>Kingdom: {listing.stats.kingdom}
          <br/>Family: {listing.stats.family}
          <br/>Genus: {listing.stats.genus}
          <br/>Origin: {listing.location}
          </td>
          </tr>

    ))

    return(
      <table>
        <tr> <th/>Todays Specials at Sprouts</tr>
      {listingComponents}
      </table>

      )

}


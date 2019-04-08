/**
 * Function for moving array to both directions
 * @param {*} array 
 * @param {*} direction 
 */
function move(array, direction = 'left') {

    /**
     * Next - Move first item from an array to its end and re-render the entire slider
     */
    if(direction === 'right') {
        const firstElement = array[0];
        array.shift();
        array.push(firstElement);
        return array;
    } 
    
    /**
     * Back - Move last item from an array to its beginning and re-render the entire slider
     */
    else {
        const lastElement = array[array.length - 1];
        array.splice(-1, 1); 
        array.unshift(lastElement);
        return array;
    }
   
  }
  
  /**
   * API Call to obtain list of images in provided folder
   */
  async function getImages() {
      const response = await fetch('https://api.colourbox.com/search?folder_ids=935575&return_values=id+title+thumbnail_url', {
        method: "GET",
        headers: {
            Authorization: "{Insert token here}"
        }  
    })
    const data = await response.json();
    return data.response.media
  }

export { move, getImages };

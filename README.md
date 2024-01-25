# Enter the Rickiverse

Rick and Morty-themed webapp to demonstrate calling an api that fetches character data from a local server and dynamically populates the interface with information about each variety of Rick. 
The app allows users to select from a dropdown menu, view their details on the left and right side of the interface, and see the character's image in the center of the page. 
Users can also like a character, with the like count updating with each click. 

## Features:

    Dynamic Content Rendering:
        Utilizes the Fetch API to retrieve character data from a local server.
        Populates the UI with character information upon page load.

    Interactive Interface:
        Allows users to select a character from a dropdown menu to view their details.
        Clicking on a character's image dynamically updates the displayed information on the left and right side.

    Like Functionality:
        Users can click a "Like" button to increase the like count for a selected Rick.
        Updates the like count which persists via db.json.
        
## Usage:

 [Clone the repository](https://github.com/racosta323/the-rickiverse/)

    Open index.html in a browser window.

    Explore the dropdown menu to select a Rick and view their details.

    Click on a character's image in the grid to view their information.

    Use the "like button" a character to increase their like count.

## Implementation Details:

    Event listeners are used to handle interactions such as image clicks and dropdown changes.

    The app dynamically creates and updates HTML elements to display character information in a grid.

    Data is fetched from and updated on a local server using the Fetch API.

## Database Interaction:

    The app interacts with a local server (http://localhost:3000/results) to fetch and update character data.

    A PATCH request is used to update the like count for a specific character.

## License

MIT License

Copyright (c) 2024 Rene Acosta & Kent Riggs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

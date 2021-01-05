# Budget Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

* **[Link](#Link)**

* **[Description](#Description)**

* **[Installation](#Installation)**

* **[Constributions](#Contributions)**

* **[Testing](#Testing)**

* **[Screenshots](#Screenshots)**

* **[Questions](#Questions)**


### Link

[Deployed application](https://tranquil-caverns-93843.herokuapp.com/)


### Description

A way to track budgets entered by the user to show a graph of the 'total over time'. The goal of this assignment was to use IndexedDB and Mongodb to ensure any data entered while offline still gets added to the database when reconnected.

To see it operate, open the link above or [here](https://tranquil-caverns-93843.herokuapp.com/) and go to your browsers dev tools. In Chrome head to 'Network' (or your browsers equivalent) and set to offline. Make an entry to the budget tracker and then navigate to Application (or your browsers equivalent) and open the 'IndexedDB' dropdown and the one following to see the entry. Then navigate back to 'Network' and reconnect then refresh the browser tab. The Offline addition will be added to the database upon reconnect.


### Installation

Fork or copy the repo and run 'npm install' to get all necessary packages. Then run 'npm start' to run the server and in your browser go to 'localhost:3000'. 


### Constributions

None


### Testing

No testing necessary


### Screenshots

Adding an entry while browser is set to offline
![Offline Budget Entry](/screens/offlinebudget.png)

Showing entry is added to IndexedDB
![Added to IndexedDB](/screens/serviceworkerentry.png)

Once reconnected and refreshed the entry has now been added to the database
![Refreshed and Reconnected](/screens/reconnectandrefresh.png)

A gif showing the above
![Budget Tracker GIF](/screens/Budget_gif.gif)


### Questions

**Any questions please contact me either [here](https://github.com/tallglassof-milkjake) or at jrmackinlay900@gmail.com

Cow List
Instructions
Read this entire document before starting your work. Complete the work in order.

Goal
Create a CRUD app using React (without Redux) that interfaces with a RESTful API powered by Node (with Express) and a database (MySQL or MariaDB or MongoDB).

Don't use anything that writes code for you (like create-react-app). On the other hand, using npm init to create the package.json and npm install to populate the package.json is permitted (and encouraged). Don't forget to commit regularly and upload your work to GitHub!

As much as possible, stick to using only the official documentation and StackOverflow. Strive to limit your use of video and blog post tutorials.

Bare Minimum Requirements
Backend Requirements
Create a RESTful API for a resource named cows that responds to the following endpoints:

intention	request type	request url	request body	side effect	response body
read all cow data	GET	/api/cows	none	none	[{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]
create new cow data	POST	/api/cows	{name: 'Milkshake', description: '...'}	creates new record in database	{name: 'Milkshake', description: '...'}
Your web server should 100% be interfacing with a database for this phase. Confirm this functionality is working properly with Postman (recommended) or via the curl command in your terminal.

Frontend Requirements
Build the Create and Read functionality of a CRUD app using React. The frontend should make use of the already created RESTful API endpoints to accomplish the following user stories:

When the user loads the page, the user should see a list of all names of previously created cows (but not their descriptions).

When the user types the name and description of a new cow they want to input into the database and presses the [Submit] button, the newly created cow's information should be displayed in the list from the previous step only after the data has been successfully written to the database.

When the user clicks on the name of a cow, the name and description of that cow should be displayed prominently at the top of the page (so as to mimic the functionality of a modal/popup that shows the details of a particular cow).

a. Only the details of the most recently clicked cow should be prominently displayed at the top of the page at a time. For example, if Betsy is the first cow clicked, Betsy's information should be displayed. If Milkshake is clicked afterwards, only Milkshake's information should be displayed. Betsy's description should no longer be visible.

b. The details of any clicked cow should be prominently displayed in the same location in the DOM at the top of the page (aka not within the clicked component).

EXAMPLE DATA:
id	name	description
1	Buttercup	a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.
2	Daisy	a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.
3	Milkshake	a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.
4	Bessie	a person's best or closest friend.
5	MooDonna	archaic : lady -- used as a form of respectful address.
6	MooLawn	a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.
Note: This data is not intended to be inserted into the database by a script. Rather, it is intended to be manually inserted one-by-one into the database via the React app.

"Advanced" Requirements
Add the backend functionality that allows users to update existing records and delete existing records. The response from the RESTful API should be that of the updated (or deleted) record.

intention	request type	request url	request body	side effect	response body
update one cow's data	PUT	/api/cows/:id	{name: 'BuTtErCuP'}	updates record for specified id with new name of BuTtErCuP	{name: 'BuTtErCuP', description: '...'}
delete one cow's data	DELETE	/api/cows/:id	none	deletes record for specified id	{name: 'BuTtErCuP', description: '...'}
Confirm this functionality is working properly with Postman (recommended) or via the curl command in your terminal.

Next, add the frontend functionality that allows users to edit existing records and delete existing records (via your RESTful API).

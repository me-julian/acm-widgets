# acm-widgets Main Repository

This project is the main repo for the "ACM Widgets Challenge", a mini-hackathon-like experiment to build widgets for an [Austin Code Mentorship](https://www.meetup.com/austin-code-mentorship/) website together.

Participants will use the [template repository](https://github.com/me-julian/acm-widget-template) to build an isolated widget component with React and Express.js. This can then be published to NPM and imported into this project. All going well, everyone's widgets will be able to be imported into this project and visible together in the site with minimal effort and no repo merging.

## Project Structure

Files/directories wrapped in \*\* \*\* will be edited by participants in their widget repositories.

```bash
├── backend
│ ├── api.js
│ ├── **db.js** # Only in the template repository. Widget's database tables and seed data go here.
│ ├── **router.js** # All widget's separate routers are added to the main app's router here.
├── frontend
│ ├── src
│ ├───── **widget** # Only in the template repository. All widget frontend code goes here.
│ │ │ ├── Widget.jsx
│ │ │ ├── widget.css
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── main.jsx
│ ├── index.html
├── .prettierrc # Auto-formatting, recommended if everyone uses it.
├── config.js # Used to configure the API url for each widget.
├── package.json
└── vite.config.js
```

## Tech Stack Details

### Frontend

-   [ReactJS](https://react.dev/)
-   [Vite](https://vitejs.dev/)

The frontend is written using vanilla ReactJS using Vite. The site given is a simple wrapper to hold all the widgets.

Participants will have an identical copy of the site in their repo. By only modifying the files related to their widget, their changes will be contained and can be imported cleanly.

Each widget React component has an apiUrl prop passed in. In the template this is automatically provided, but when importing into the main project you must manually pass in the correct url with their package name endpoint.

Note that with the time constraints, responsiveness is not expected. It's assumed that widgets will be built for a laptop or perhaps tablet size of average resolution.

#### Styling

The project uses standard CSS. The provided styling is written using the [Block Element Modifier](https://getbem.com/) method, but this method is specifically made to be modular so there shouldn't be any issues with participants adding styles.

The only concern is that widgets don't override their parent styling or otherwise break out of their widget container.

### Backend

-   [Express.js](https://expressjs.com/)
-   [SQLite3](https://www.sqlite.org/docs.html)

The backend is comprised of an Express.js REST API server and an in-memory SQLite database for simplicity. Each widget will have their own database.

api.js sets up the basic Express server. The router exported in router.js is how we import and append the API endpoints created by participants, each on a dedicated url equivalent to their widget's package name.

## Importing Widget Packages

Note that I didn't get exporting out of NPM package indexes working quite right, so you'll need to import each file explicitly. Examples are shown below.

1. Once a participant has exported their package to NPM, use `npm install @acm-widgets/{PACKAGE_NAME}` to retrieve it.

2. Import their router and attach it to the main router using their package name as the URL. Example:

```js
// router.js
import myPackageRouter from '@acm-widgets/my-package/backend/router.js';

const router = Router();
router.use('/my-package', myPackageRouter);
```

3. Import their React widget component

```js
// App.jsx
import MyPackageWidget from '@acm-widgets/my-package/frontend/src/widget/Widget.jsx';

import './App.css';

// DO NOT CHANGE
function App() {
    return (
        <>
            <h1 className="main-title">Austin Code Mentorship Widgets</h1>
            <div className="widgets">
                // Insert widgets here
                <MyPackageWidget apiUrl={`http://127.0.0.1:5000/api/my-package`} />
            </div>
            <a
                href="https://github.com/me-julian/acm-widgets"
                target="_blank"
                referrerPolicy="noReferrer"
                className="link link--grey"
            >
                Click here to learn more about this website
            </a>
        </>
    );
}

export default App;
```

4. Repeat this process for all widgets.

For more info on what this process looks like from the participants' point of view, read the [template's readme](https://github.com/me-julian/acm-widget-template).

## How the Importing Works

The template is an almost exact copy of this repo. It exports their database, router and widget code to be imported as a package here.

Each widget is placed into a CSS grid with a fixed size. As long as participants don't explicitly use JavaScript or CSS to break out of their bounds, they should stay contained.

In order to keep the backend contained, participants will run a script called init.js. This will prompt them to enter a package name, which will be validated as a usable NPM package name and url endpoint. This then goes to their package.json, lockfile and config file to insert the name into the correct places. This serves to both ready their package for publishing and fill in the unique base url endpoint which all of their REST calls will be on.

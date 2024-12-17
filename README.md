/* ⚠️ 🔨 ** under construction: expected release date, December 25 🎅 ** ⚠️ 🔨 */ 

**Remaining items:**
1. Investigate using createRoutesFromChildren internally and only having a single function exposed via this library.
2. publish on npm.
3. get feedback if any and make chages.

## Are you using react router ?
## Do you want to know your routes?

Try this function: `getRouteList(<your_routes>)` !

## Compatability
Compatable with React-Router 6 and below.

## How
If you have JSX routes: such as `<Route path="/">` pass it here: createRoutesFromChildren to convert them to routeObjects<br/>
(future iterations will do this internally via this library.)

In your Routes file you can pass your array of all app routes to this function: getRouteList
```javascript
  // Routes.tsx
  import { getRouteList } from 'react-route-lister';
  console.log(getRouteList(your_app_routes);
```
That is all there is to it!<br/>
**Simple enough to be added into any react application!**

Put it behind an environment variable flag to run only specific conditions.

**Example output**
``` javascript
const routes = [
  'http://localhost:3000/admin',
  'http://localhost:3000/admin/users',
  'http://localhost:3000/about',
  'http://localhost:3000/contact',
  'http://localhost:3000/users/:userId/profile/:profileId
  ... etc.
]
```

If you have a working jest test suite you can 
1. make a test that outputs this result.
2. ignore the test in your normal test suite.
3. add a package to the package.json to specifically run this test.

**Example test**
```javascript
import '@testing-library/jest-dom';
import { AppRoutes } from 'Routes';
import { getRouteList } from 'react-route-lister';

describe("routes", () => {
  beforeEach(() => {
    jest.spyOn(console, 'error')
    // @ts-ignore jest.spyOn adds this functionallity
    console.error.mockImplementation(() => null);
  });
  test("Undefined allowed when not required", async () => {
    console.log(getRouteList(app_routes);
    expect(true).toEqual(true)
  })
})
```

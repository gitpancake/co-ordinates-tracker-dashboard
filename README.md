# co-ordinates-tracker-dashboard

**Archived.** Admin dashboard for the co-ordinates / position-logging system that backs the **Hot Air Balloon Tracker** project. A React + Semantic UI app for managing users of the tracking platform.

Package name: `tracker-dashboard`.

## About the balloon project

A university-era project for launching weather balloons and recovering them after burst. The system integrates live telemetry from HAB Hub (the amateur high-altitude-ballooning telemetry network), a landing-prediction model, and a chase-team navigation UI so ground teams can drive to the right field before the payload hits the grass.

## What this repo is

The admin UI for the tracking platform — lets admins:

- **Login** (against `co-ordinates-logger-api`)
- **Add Users** to the system
- **Delete Users**
- **View Users**
- **Logout**

Built intentionally simple as a reusable management-dashboard pattern.

## Tech stack

- **React** (create-react-app, `react-scripts`)
- **Semantic UI React** + `semantic-ui-css`
- **Redux** (`react-redux` + `redux-thunk`)
- **Formik** + **Yup** for forms + validation
- **axios** for API calls
- **moment**, **istanbul**

## Structure

```
src/                # React app (components + redux store)
public/
build/              # Committed build output
package.json        # "tracker-dashboard"
```

## Dev + build

```bash
yarn
yarn start          # react-scripts dev server
yarn build
```

## Credits

- [Semantic UI](https://github.com/Semantic-Org/Semantic-UI)
- [Axios](https://github.com/axios/axios)
- [Jest](https://github.com/facebook/jest)

## Related projects

The hot air balloon ecosystem in this org:

- [`balloon-tracker`](https://github.com/gitpancake/balloon-tracker) — main server — HAB Hub ingestion + landing prediction + navigation
- [`balloon-tracker-ui`](https://github.com/gitpancake/balloon-tracker-ui) — React frontend for visualizing the tracker
- [`co-ordinates-logger-api`](https://github.com/gitpancake/co-ordinates-logger-api) — the co-ordinates / position backend that this dashboard manages

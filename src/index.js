import startWebpage from "./webpage.js";

startWebpage();


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
else {
    console.log('Prod mode')
}

The goal of this project was to create a GitHub User Search tool by that connects
to the GitHub public API and perfors a get request using Axios, Parcel-Bundler,
Browser-Sync and vanilla JS. Styling is handled with Tailwind CSS.

Learnings:
1. Make sure to invoke "parcel watch app.js", not just once, but every time
you decide to close the editor down it needs to be restarted. Painful lesson.

2. Template literals are powerful. 

3. You can create HTML style it and invoke it with a simple function like
this: const createCard = (data) => ` <html stye="some-style"></html> `
This is a pretty powerful concept for returning data from an api and styling
it on the page.

![screen shot](https://github.com/[tripdog]/[GH-lookup]/blob/[master]/GH-lookup/screen-shot.jpg?raw=true)

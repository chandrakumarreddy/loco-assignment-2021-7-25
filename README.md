### Loco Frontend Assessment:

Build a simple React app that allows viewing and interacting with a grid of curated photos from Unsplash

● Use create-react-app to set up a basic single-page React application as shown here: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app. (NOTE: We will only focus on creating a single-page React application, so don't worry about the other sections on that page such as Next.js).

● Refer to the Unsplash API docs here to set up a developer account: https://unsplash.com/documentation.

● Display a grid of photos in your React app. Use the GET /photos/curated endpoint from the Unsplash API to get a set of curated images.

● The grid of photos should preserve the aspect ratio of the photos it's displaying, meaning it shouldn't crop the image in any way.

● The grid should be responsive, and should work in both portrait and landscape orientations on both mobile and desktop browsers.

● The grid should support infinite scrolling, using a lazy-load strategy to fetch additional images as the user scrolls.

● When the user taps on a photo on the grid it should show the full photo in a full width lightbox popup with more information about the photo.

● The lightbox popup should be dismissible with a close button.

● Add left/right arrows or swiping to the lightbox, to allow browsing the previous/next
images without dismissing the popup.

● You're free to use existing open source React components or Javascript
packages/libraries from npm to complete this task.

## Getting Started

The development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

This project is bootstrapped with Nextjs .To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Create a stream to write the sitemap.xml file
const sitemap = new SitemapStream({ hostname: 'https://urbanlakesprings.in' });

// Define the URLs to include in the sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  // Add other URLs of your site here
];

// Create a writable stream for the sitemap
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// Add URLs to the sitemap stream
urls.forEach(url => sitemap.write(url));

// Close the stream
sitemap.end();

// Use the promise to handle async nature of streamToPromise
streamToPromise(sitemap)
  .then(() => {
    console.log('Sitemap has been generated and saved to public/sitemap.xml');
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });

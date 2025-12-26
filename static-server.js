const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from 'out' directory
app.use(express.static('out', {
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    // Set cache headers for static assets
    if (filePath.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  }
}));

// Handle trailing slashes - redirect to directory index
app.use((req, res, next) => {
  if (req.path.endsWith('/') && req.path !== '/') {
    const indexPath = path.join(__dirname, 'out', req.path, 'index.html');
    res.sendFile(indexPath, err => {
      if (err) next();
    });
  } else {
    next();
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'out', '404.html'), err => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

app.listen(port, () => {
  console.log(`Static server running on port ${port}`);
  console.log(`Serving files from: ${path.join(__dirname, 'out')}`);
});

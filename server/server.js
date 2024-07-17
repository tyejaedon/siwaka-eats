const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:3001', // Replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '../build')));

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configure Multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only jpg, jpeg, and png files allowed.'));
    }
  },
});

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'seller',
});

// Store user info globally
var sessionStore = {};

// Handle registration form submission
app.post('/submit', upload.fields([
  { name: 'foodLicense', maxCount: 1 },
  { name: 'businessImage', maxCount: 1 }
]), async (req, res) => {
  const { personName, businessName, paymentMode, location, email, password } = req.body;
  const foodLicensePath = req.files?.foodLicense?.[0]?.path;
  const businessImagePath = req.files?.businessImage?.[0]?.path;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const query = 'INSERT INTO registrations (personName, businessName, foodLicense, paymentMode, businessImage, location, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    await pool.query(query, [personName, businessName, foodLicensePath, paymentMode, businessImagePath, location, email, hashedPassword]);
    res.redirect('/');
  } catch (err) {
    console.error('Error saving to database:', err);
    res.status(500).send('Error saving to database');
  }
});

// Handle login request
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const connection = await pool.getConnection();
    const query = 'SELECT * FROM registrations WHERE email = ?';
    const [results] = await connection.execute(query, [email]);
    connection.release();

    if (results.length === 0) {
      return res.status(401).send('Invalid email or password');
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      sessionStore.businessImage = user.businessImage;
      sessionStore.businessName = user.businessName;
      sessionStore.email = user.email;
      // Successful login
      return res.redirect('/seller-homepage'); // Redirect as needed
    } else {
      // Incorrect password
      return res.status(401).send('Invalid email or password');
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Retrieve user data
app.get('/userdata', (req, res) => {
  if (sessionStore.businessName) {
    res.json({ businessName: sessionStore.businessName, businessImage: sessionStore.businessImage });
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Handle menu item insertion
app.post('/menuitems', upload.fields([{ name: 'food_image', maxCount: 1 }]), async (req, res) => {
  const connection = await pool.getConnection();
  const { menuItem, price } = req.body;
  const image = req.files?.food_image?.[0]?.path;

  try {
    const query = "INSERT INTO menu_items (menu_item, price, image, email) VALUES (?, ?, ?, ?)";
    await connection.execute(query, [menuItem, price, image, sessionStore.email]);
    res.redirect('/menu.html?success=1');
  } catch (err) {
    console.error('Error saving to database:', err);
    res.status(500).send('Error saving to database');
  } finally {
    connection.release();
  }
});

// Fetch menu items
app.get('/items', async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const query = 'SELECT * FROM menu_items WHERE email = ?';
    const [results] = await connection.query(query, [sessionStore.email]);

    const menuItems = results.map(item => {
      item.url = item.image ? path.relative(__dirname, item.image.toString()) : null;
      return item;
    });

    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).send('Error fetching menu items');
  } finally {
    connection.release();
  }
});

// Serve React app's index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

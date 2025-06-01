import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Dummy event data
const dummyEvents = [
  {
    id: 1,
    name: 'Summer Music Festival',
    date: '2025-06-15',
    time: '18:00',
    location: 'Lahore',
    description: 'Enjoy live music from local bands and food trucks in the park.',
    image: '/event1.jpg',
  },
  {
    id: 2,
    name: 'Artisan Market',
    date: '2025-07-20',
    time: '10:00',
    location: 'Karachi',
    description: 'Shop handmade goods from local artisans and crafters.',
    image: '/event2.jpg',
  },
  {
    id: 3,
    name: 'Tech Meetup',
    date: '2025-08-15',
    time: '19:00',
    location: 'Islamabad',
    description: 'Network with tech enthusiasts and hear talks from industry leaders.',
    image: '/event3.jpg',
  },
  {
    id: 4,
    name: 'Foodie Fest',
    date: '2025-09-01',
    time: '12:00',
    location: 'Faisalabad',
    description: "Taste dishes from the city's best restaurants and food trucks.",
    image: '/event4.jpg',
  },
  {
    id: 5,
    name: 'Outdoor Movie Night',
    date: '2025-10-25',
    time: '20:30',
    location: 'Multan',
    description: 'Bring a blanket and enjoy a family-friendly movie under the stars.',
    image: '/event5.jpg',
  },
  {
    id: 6,
    name: 'Book Fair',
    date: '2025-11-10',
    time: '09:00',
    location: 'Peshawar',
    description: 'Discover new books and meet local authors.',
    image: '/event6.jpg',
  },
  {
    id: 7,
    name: 'Photography Workshop',
    date: '2025-11-22',
    time: '14:00',
    location: 'Quetta',
    description: 'Learn photography basics from a professional.',
    image: '/event7.jpg',
  },
  {
    id: 8,
    name: 'Yoga Retreat',
    date: '2025-12-05',
    time: '08:00',
    location: 'Gilgit',
    description: 'A weekend of relaxation and wellness.',
    image: '/event8.jpg',
  },
  {
    id: 9,
    name: 'Winterland Festival',
    date: '2025-12-20',
    time: '16:00',
    location: 'Rawalpindi',
    description: 'New Winterland in Rawalpindi fun for the whole family.',
    image: '/event9.jpg',
  },
  {
    id: 10,
    name: 'Startup Pitch Competition',
    date: '2026-01-18',
    time: '10:00',
    location: 'Islamabad',
    description: 'See the next big ideas from local startups.',
    image: '/event10.jpg',
  },
  {
    id: 11,
    name: 'Food Truck Rally',
    date: '2026-02-14',
    time: '11:00',
    location: 'Lahore',
    description: 'A variety of food trucks offering delicious eats.',
    image: '/event11.jpg',
  },
  {
    id: 12,
    name: 'Coding Bootcamp Demo Day',
    date: '2026-03-01',
    time: '17:00',
    location: 'Karachi',
    description: 'See projects from recent coding bootcamp graduates.',
    image: '/event12.jpg',
  },
];

// Array of background images for the hero section
const heroImages = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setEvents(dummyEvents);
    }, 500);
  }, []);

  // Function to start the automatic image slider
  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % heroImages.length
      );
    }, 3000); // Change image every 3 seconds
  };

  // Function to stop the automatic image slider
  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  // Start the automatic slider on component mount
  useEffect(() => {
    startSlider();
    return () => stopSlider(); // Clean up the interval on component unmount
  }, []);

  // Filter events by search
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark transparent-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Eventify Logo" className="navbar-logo me-2" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#featured">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
        }}
      >
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4 fw-bold">Pakistan Eventify</h1>
            <p className="lead mb-4">
              Discover Events Near You with Pakistan Eventify
            </p>
            <div>
              <a href="#featured" className="btn btn-primary btn-lg">View Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section id="featured" className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">Featured Events</h2>
            {/* Bonus: Search Bar */}
            <input
              type="text"
              className="form-control w-auto"
              style={{ minWidth: 200 }}
              placeholder="Search events..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="row">
            {filteredEvents.length === 0 ? (
              <div className="col-12 text-center py-5">
                <span className="text-muted">No events found.</span>
              </div>
            ) : (
              filteredEvents.map(event => (
                <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
                  <div className="card h-100 shadow-sm">
                     <img src={event.image} className="card-img-top" alt={event.name} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{event.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        <i className="bi bi-calendar me-1"></i>{event.date} &bull; {event.time}
                      </h6>
                      <div className="mb-2 text-muted">
                        <i className="bi bi-geo-alt-fill me-1"></i>
                        {event.location}
                      </div>
                      <p className="card-text flex-grow-1">{event.description}</p>
                      <button className="btn btn-primary mt-auto" disabled>Register</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="text-center mb-4">
                <p className="lead mb-4">Connect with us through our social media or contact us directly.</p>
                <div className="d-flex justify-content-center mb-4">
                  <a href="#" className="text-white mx-3 fs-4"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-white mx-3 fs-4"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-white mx-3 fs-4"><i className="bi bi-twitter"></i></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">
                  <p className="mb-0"><i className="bi bi-envelope me-2"></i>Email: pakistan_eventify</p>
                </div>
                <div className="col-md-6 text-center text-md-start">
                  <p className="mb-0"><i className="bi bi-telephone me-2"></i>Contact: +1 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

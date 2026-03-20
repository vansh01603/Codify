import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './learn.css';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Web Development',
      topic: 'webDev',
      text: 'Learn HTML, CSS, JavaScript, and modern frameworks to build stunning websites.',
      image: 'https://th.bing.com/th/id/OIP.xi_VY54V535hztHz11VTyQHaFL?pid=ImgDetMain',
    },
    {
      title: 'Data Structures',
      topic: 'ds',
      text: 'Master stacks, queues, linked lists, trees, and algorithms for tech interviews.',
      image: 'https://repository-images.githubusercontent.com/403817624/3d10f761-1027-4d0a-9906-48361e466d87',
    },
    {
      title: 'Machine Learning',
      topic: 'ml',
      text: 'Understand supervised and unsupervised learning with real-world applications.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.wNARWHbDERUTCTpLKFuroQHaFP?pid=ImgDetMain',
    },
    {
      title: 'C Programming',
      topic: 'c',
      text: 'Get started with the fundamentals of C programming language and memory management.',
      image: 'https://tse1.mm.bing.net/th/id/OIP.tylspz6WPxtLq5N7s6I5LgAAAA?r=0&w=474&h=410&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'C++ Programming',
      topic: 'cpp',
      text: 'Learn object-oriented programming and advanced features in C++.',
      image: 'https://www.scalive.in/assets/images/course_details/cpp_programming.png',
    },
    {
      title: 'Java Programming',
      topic: 'java',
      text: 'Dive into Java for building cross-platform applications and backend systems.',
      image: 'https://wallpaperaccess.com/full/3865783.jpg',
    },
  ];

  return (
    <div className="learn-container">
      {cards.map((card, index) => (
        <Card key={index} className="learn-div" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title style={{ color: "whitesmoke" }}>{card.title}</Card.Title>
            <Card.Text style={{ color: "whitesmoke" }}>{card.text}</Card.Text>
          </Card.Body>
          <Card.Body style={{ textAlign: "center" }}>
            <Button
              variant="outline-primary"
              onClick={() => {
                const userData = localStorage.getItem("data");
                const signInfo = localStorage.getItem("SignInfo");
                const loginInfo = localStorage.getItem("LoginInfo");

                if (userData || signInfo || loginInfo) {
                  navigate(`/Components/Quiz/Practice?lang=${card.topic}`);
                } else {
                  alert("Please login / signup first");
                }
              }}
            >
              Quiz
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Explore;

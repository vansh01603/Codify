import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './learn.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Learn() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Web Development',
      text: 'Learn HTML, CSS, JavaScript, and modern frameworks to build stunning websites.',
      image: 'https://th.bing.com/th/id/OIP.xi_VY54V535hztHz11VTyQHaFL?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      list: ['HTML & CSS', 'JavaScript', 'React.js'],
      langKey: 'webDev',
    },
    {
      title: 'Data Structures',
      text: 'Master stacks, queues, linked lists, trees, and algorithms for tech interviews.',
      image: 'https://repository-images.githubusercontent.com/403817624/3d10f761-1027-4d0a-9906-48361e466d87',
      list: ['Arrays', 'Trees', 'Graphs'],
      langKey: 'ds',
    },
    {
      title: 'Machine Learning',
      text: 'Understand supervised and unsupervised learning with real-world applications.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.wNARWHbDERUTCTpLKFuroQHaFP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      list: ['Linear Regression', 'Clustering', 'Neural Networks'],
      langKey: 'ml',
    }
  ];

  return (
    <>
      <div className="learn-container">
        {cards.map((card, index) => (
          <Card key={index} className='learn-div' style={{ width: '18rem' }}>
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
                    navigate(`/Components/Quiz/Practice?lang=${card.langKey}`);
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

      <div style={{ textAlign: "center" }}>
        <Button
          variant="outline-primary"
          onClick={() => navigate('/Components/Explore')}
        >
          More Quiz
        </Button>
      </div>
    </>
  );
}

export default Learn;

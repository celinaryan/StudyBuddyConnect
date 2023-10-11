import studentImg from '../images/studentsStudying.jpeg';
export default function Home() {
    return (
      <section>
        <div className="centerText">
        <h1> Welcome to Study Buddy Connect! </h1>
        <p> Empowering college students through collaborative learning and connections
      for academic success. </p>
      
       
      <img src={studentImg} alt="students studying" width={400} />
      </div>
      
    
      </section>
    );
  }

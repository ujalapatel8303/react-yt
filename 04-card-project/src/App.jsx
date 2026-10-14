import "./App.css";
import Card from "./components/Card";

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$45-60/hr",
      location: "Mountain View, CA"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      datePosted: "10 weeks ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior level",
      pay: "$35-50/hr",
      location: "Redmond, WA"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$40-55/hr",
      location: "Seattle, WA"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Junior level",
      pay: "$38-52/hr",
      location: "Menlo Park, CA"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      datePosted: "2 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$50-65/hr",
      location: "Cupertino, CA"
    }
  ];

  return (
    <div className="parent">
      {jobOpenings.map((elem, index) => {
        return (
          <Card
            key={index}
            brandLogo={elem.brandLogo}
            company={elem.company}
            dateposted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
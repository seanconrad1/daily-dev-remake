import React from "react";
import logo from "logo.svg";
import "App.css";
import Item from "Components/Item";
import Header from "Components/Header/Header";
import SearchBar from "Components/SearchBar/SearchBar";

const myArray = [
  {
    title: "🔥 6 Awesome CSS Layout Generators",
    img: "https://media.ethicalads.io/media/images/2021/05/DODX2735-240x180.jpg",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title:
      "DigitalOcean Managed MongoDB a fully managed DBaaS for modern apps. Try now with $100 credit.",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "100 Things You Should Know as a Software Engineer",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/828952d841635acc8460918b82360e3a",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "GitHub’s Engineering Team has moved to Codespaces",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/f089db2164ddbb830371846e5ea7050f",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
  {
    title: "No More ../../../ Import in React",
    img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/40b8acddf8a6d30345c7c6d653537c66",
    date: "Aug 13, 2021",
    readTime: 13,
    icon: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBar />
        <div className="item-container">
          {myArray.map((item, idx) => {
            return (
              <Item
                key={idx}
                title={item.title}
                img={item.img}
                date={item.date}
                readTime={item.readTime}
                icon={item.icon}
              ></Item>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;

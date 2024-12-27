import React from "react";

import './style.scss';
import Section from "../shared/section";
import Blog1 from '../../images/blogs/async.png';
import Blog2 from '../../images/blogs/react.png';
import Blog3 from '../../images/blogs/redux2.webp';
import BlogCard from "./blog-card";

const Blogs = () => {
  return (
    <Section id="blogs" title={'Blogs & Articles'} background={'dark'}>
      <div className={'blogs-content-wrapper'}>
        <BlogCard
          user={'Stoman'}
          date={'Jan 14, 2023'}
          image={Blog1}
          title={'Async/Await, Promises and Callbacks in JavaScript'}
          description={'JavaScript by it\'s nature is a synchronous programming language and is single-threaded. ' +
              'This means that the code cannot run in parallel and cannot execute multiple tasks at the same time. ' +
              'The JavaScript compiler reads instructions line by line'}
          path={'https://www.stoman.me/articles/async-await-promises-callbacks-in-javascript'}
        />
          <BlogCard
        user={'geeksforgeeks'}
        date={'12 Oct, 2024'}
        image={Blog2}
        title={'React Lifecycle'}
        description={'The React lifecycle is an essential concept for any React developer to understand.' +
            ' Each component in React has a lifecycle that you can monitor and manipulate during its three' +
            ' main phases: Mounting, Updating, and Unmounting. ' +
            'These phases represent the stages a React component goes ' +
            'through from its creation to its removal from the DOM'}
        path={'https://www.geeksforgeeks.org/reactjs-lifecycle-components/'}
      />
          <BlogCard
        user={'Trevor-Indrek Lasn'}
        date={'Sep 16, 2020'}
        image={Blog3}
        title={'Redux Toolkit'}
        description={'Redux is an excellent tool for managing a global state for your applications.' +
            ' React fits incredibly well with front-end libraries, such as React, Vue, or Angular.'}
        path={'https://betterprogramming.pub/boost-your-productivity-with-the-redux-toolkit-7a14657351c3'}
      />
      </div>
    </Section>
  )
}
export default Blogs;

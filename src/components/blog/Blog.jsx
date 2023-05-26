import React from 'react';

const Blog = () => {
    const downloadPDF = () => {
        const url = 'https://www.africau.edu/images/default/sample.pdf'
        const link= document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'my-file.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='container mx-auto p-5'>
            <div onClick={downloadPDF} className='flex items-center mb-5 justify-center'>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">PDF DOWNLOADER</button>
                </div>
                <div>
                    <h1 className='font-bold'>
                        Q: Tell us the differences between uncontrolled and controlled components?
                    </h1>
                    <p>
                        A:In React, there are two types of components, controlled and uncontrolled components. Controlled components are those where the value is controlled by React, whereas uncontrolled components have their own state. <br />
                        Uncontrolled components are those where the state of the component is managed internally by the DOM, and the values are accessed using DOM manipulation methods.Examples of uncontrolled components are form input fields, which maintain their own state and can be accessed using the ref attribute.
                    </p>
                    <h1 className='font-bold'>
                        Q: How to validate React props using PropTypes?
                    </h1>
                    <p>
                        A:Validating React Props using PropTypes:
                        React provides a built-in library called PropTypes, which is used for validating the props passed to a component. PropTypes can be used to define the type and shape of the props that are expected by a component.
                    </p>
                    <h1 className='font-bold'>
                        Q:Tell us the difference between nodejs and express js?
                    </h1>
                    <p>
                        A:Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework for building web applications using Node.js.

                    </p>
                    <h1 className='font-bold'>
                        Q:What is a custom hook, and why will you create a custom hook?
                    </h1>
                    <p>
                        A:Custom Hooks are functions in React that allow you to reuse stateful logic across multiple components. Custom Hooks allow you to extract complex logic from components and reuse it in other components.
                    </p>
                </div>
            
        </div>
    );
};

export default Blog;
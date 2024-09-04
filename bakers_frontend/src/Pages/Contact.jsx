import React, { useState } from 'react';

const Team = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validate the phone field to only accept numeric input
        if (name === 'phone' && value !== '' && !/^\d+$/.test(value)) {
            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });

        // Remove the error message when the user starts fixing the input
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        // Simulate sending data to the backend
        const response = await fetch('http://your-backend-api.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log('Form Submitted:', result);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            query: '',
        });
    };

    return (
        <div>
            {/* Page Header */}
            <div className="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center pt-5 pb-3">
                    <h1 className="display-4 text-white animated slideInDown mb-3">Our Team</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center py-10 ">

                <form onSubmit={handleSubmit} className="bg-black p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="display-6 mb-4 text-white">If You Have Any Query, Please Contact Us</h1>
                    {/* <h2 className="text-2xl font-bold mb-5 text-yellow-600">Contact Us</h2> */}
                    <div className="mb-4">
                        <label className="text-white text-sm font-bold mb-2 items-start flex" htmlFor="name">Name*</label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                                errors.name ? 'border-red-500' : ''
                            }`}
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className="text-red-500 text-md flex items-start">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="flex items-start text-white text-sm font-bold mb-2" htmlFor="email">Email*</label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                                errors.email ? 'border-red-500' : ''
                            }`}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="text-red-500 text-md flex items-start ">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="flex text-white text-sm font-bold mb-2 items-start" htmlFor="phone">Phone</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-6 items-start">
                        <label className="flex items-start text-white text-sm font-bold mb-2" htmlFor="query">Your Query</label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="query"
                            name="query"
                            placeholder="Write your query here..."
                            value={formData.query}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Team;
import React, { useState } from 'react';
import Wrapper from '../components/Wrapper';

const Home: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);
    const [buttonText, setButtonText] = useState('Send');

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponse(null);
        setButtonText('Sending...');

        console.log({
            name,
            email,
            subject,
            message,
        })

        // try {
        //   const response = await axios.post('/api', data, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });


        //   if (response.status === 200) {
        //     setResponse(response.data.message);
        //     setButtonText('✓');
        //     setName('');
        //     setEmail('');
        //     setSubject('');
        //     setMessage('');

        //     setTimeout(() => {
        //       setButtonText('Send');
        //       setResponse(null)
        //     }, 3000);
        //   } else {
        //     setResponse('Failed to send message. Please try again later.');
        //     setButtonText('Send');
        //   }
        // } catch (error) {
        //   console.error('Error sending message:', error);
        //   setResponse('An error occurred. Please try again later.');
        //   setButtonText('Send');
        // } finally {
        //   setLoading(false);
        // }
    };

    return (
            <Wrapper footer={false}>
                <div className="flex flex-col min-h-screen">
                    <div className="bg-cover bg-center h-screen bg-[url('/contactAsset/contact-us-t-header.jpg')]">
                        <div className="flex flex-col items-center justify-center h-full space-y-4">
                            <h1 className="text-4xl text-white text-center mb-6">Contact us now</h1>
                            <div className="flex space-x-4">
                                <a href='tel:+92 300 0512401' className="bg-btn text-white px-6 py-2 hover:bg-btn/80 transition duration-300">
                                    Contact
                                </a>
                                <a href='/services' className="bg-transparent outline outline-black outline-1 hover:outline-none box-border text-white px-6 py-2 hover:bg-black-700 hover:bg-btn transition duration-300">
                                    Services
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cover bg-tertiary bg-center py-20 "  >
                        <div className="container grid grid-cols-1 mx-2 md:grid-cols-3 gap-10 text-black">
                            <div>
                                <h3 className="text-2xl">Opening hours</h3>
                                <p>Monday - Friday: 8AM — 10PM<br />Saturday: 9AM — 10PM<br />Sunday: 10AM — 8PM</p>
                            </div>
                            <div>
                                <h3 className="text-2xl">Contact</h3>
                                <p>Phone: +92 300 0512401<br />Whatsapp: + 92 300 0825124<br />Email: info@asadjaffery.com</p>
                            </div>
                            <div>
                                <h3 className="text-2xl">Location</h3>
                                <p>Office,<br />#,<br />Pakistan</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-tertiary pt-6">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl text-black">Send me a message</h2>
                            <form className="mt-8 space-y-4 mx-2 mb-6" onSubmit={submitHandler}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full px-4 py-2 border border-gray-300 rounded"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                    />
                                </div>
                                <textarea
                                    placeholder="Your message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                                <button type="submit" className="w-full py-2 bg-btn hover:bg-btn/80 text-white rounded" disabled={loading}>
                                    {loading ? 'Sending...' : buttonText}
                                </button>
                            </form>
                            {response && <p className="mt-4 text-white">{response}</p>}
                        </div>
                        <footer className="bg-btn text-white p-4 text-center">
                            <div className=''>
                                <img src="/contactAsset/astro-footer-icon.png" alt="Footer Icon" className="mx-auto" />
                                <p>Contact<br />+92 300 0512401</p>
                                <p>Whatsapp<br />+ 92 300 0825124</p>
                            </div>
                            <p className="mt-4">&copy; 2020 asadJaffery. All Rights Reserved. <a href="http://www.linkedin.com/in/zeeshanalico" className="hover:underline">Zeeshan Ali</a></p>
                        </footer>
                    </div>
                </div>
            </Wrapper>
    );
};

export default Home;

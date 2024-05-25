import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl w-full mx-auto mb-6">
                    <h2 className="pb-3 text-3xl text-green-500 decoration-2 text-center">Contact Us</h2>
                    <p className="pb-5 text-[16px] text-center">Got a technical issue? Want to contact us?</p>
                </div>
                <form className="bg-white shadow-lg rounded-lg p-10 max-w-4xl w-full mx-auto">
                    <div className="mb-4">
                        <label className="block text-[15px] mb-2" htmlFor="email">Your Email:</label>
                        <input type="email" id="email" className="w-full border border-green-200 p-2 rounded"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-[15px] mb-2" htmlFor="subject">Your Subject:</label>
                        <input type="text" id="subject" className="w-full border border-green-200 p-2 rounded"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-[15px] mb-2" htmlFor="message">Your Message:</label>
                        <textarea id="message" className="w-full border border-green-200 p-2 rounded"
                                  rows={4}></textarea>
                    </div>
                    <div className="text-center">
                        <button className="text-[12px] text-white bg-green-400 px-4 py-2 rounded">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

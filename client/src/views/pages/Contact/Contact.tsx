import {Component} from "react";
import axios from "axios";

interface ContactProps {
    data: any
}

interface ContactState {
    email: string;
    subject: string;
    message: string;
}

export class Contact extends Component <ContactProps, ContactState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({
            baseURL: `http://localhost:4000`
        });
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    private onSendBtnClick = () => {
        try {
            this.api.post('contacts/submit', {
                "email": this.state.email,
                "subject": this.state.subject,
                "message": this.state.message
            }).then((res: { data: any }) => {
                const response = res.data;
                alert(response);
            }).catch((error: any) => {
                console.error("Axios Error", error);
            });
        } catch (error) {
            console.error('Submitting Data Error : ', error);
        }
    }

    private handleMessageInputOnChange = (event: { target: { value: any, name: any } }) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-8 m-8 bg-white rounded-lg shadow-md mt-[90px] mb-[80px] w-[600px]">
                    <h2 className="text-3xl text-center text-lightGreen font-bold mb-3">Contact Us</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full p-3 border border-gray-300 rounded-md"
                                   placeholder="Enter your email" name="email" value={this.state.email}
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input type="text"
                                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-lightGreen focus:border-lightGreen"
                                   placeholder="Enter subject" name="subject" value={this.state.subject}
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-lightGreen focus:border-lightGreen"
                                rows={5} placeholder="Enter your message" name="message" value={this.state.message}
                                onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="text-center">
                            <button
                                className="px-6 py-2 bg-lightGreen text-white rounded-md hover:bg-green-700 transition duration-300"
                                onClick={this.onSendBtnClick}>Send
                                Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
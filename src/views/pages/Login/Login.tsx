export function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-3xl font-bold text-lightGreen mb-6 text-center">LOGIN</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input id="email" name="email" type="email" required
                               className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm text-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                        <input id="password" name="password" type="password" required
                               className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm text-gray-300"/>
                    </div>
                    <div>
                        <button type="submit"
                                className="w-full py-2 px-4 bg-lightGreen text-gray-900 font-semibold rounded-md hover:text-white">
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
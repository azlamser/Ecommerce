function ContactUs() {
    return (
        <>
            <h1 className="text-5xl text-center underline ">what's your problem ?</h1>
            <form className="max-w-md mx-auto p-6 bg-white shadow-2xl rounded-lg space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Contact Us</h2>


                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-gray-600 font-medium">Email ID</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-gray-600 font-medium">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="problem" className="mb-1 text-gray-600 font-medium">Describe your problem</label>
                    <textarea
                        name="problem"
                        id="problem"
                        rows="5"
                        placeholder="What kind of problem are you facing..."
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    ></textarea>
                </div>

              
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition mr-4"
                        
                    >
                        Submit
                    </button>
                    <input type="reset" value="reset" className="
                    bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition
                    ml-4
                    " />

                </div>
            </form>

        </>
    )

}
export default ContactUs
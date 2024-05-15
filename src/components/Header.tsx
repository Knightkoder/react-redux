export default function Header() {
    return (
        <>
            <div id="head" className="flex border-teal-500 border-t-2 w-full  ">
                <div className="w-full">
                    <header className="flex bg-red-500 justify-between h-20 border-b border-b-gray-200 items-center px-6">
                        <div id="left-header" className="">  
                            <img src="https://static.coopeuch.cl/media/logo/stores/1/logocoop.png" className="w-1/2"></img>
                            <h4 className="text-white p-1">Demo Task Test</h4>
                        </div>
                        <div
                            id="right-header"
                            className="text-white hover:text-gray-600 space-x-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-7 h-7">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}

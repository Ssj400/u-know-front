


export function loading () {
    return (
        <div className="flex items-center justify-center h-screen z-50 fixed top-0 left-0 right-0 bottom-0 bg-opacity-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 position-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}
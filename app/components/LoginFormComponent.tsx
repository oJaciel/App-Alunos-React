export default function LoginFormComponent() {
    return (
        <div>
            <form>
                <label
                    htmlFor="email"
                    className="mb-2 text-sm font-bold text-gray-900">
                    Email
                </label>
                <br />
                <input
                    name="email"
                    type="email"
                    placeholder="Digite o email"
                    className="border p-2 mb-2 w-80 mb-4" />

                <br />

                <label htmlFor="password"
                    className="mb-2 text-sm font-bold text-gray-900">
                    Password
                </label>
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="Digite a senha"
                    className="border p-2 mb-2 w-80 mb-4" />

                <br />

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 mt-2 font-semibold hover:bg-blue-700">
                        Login
                    </button>
                </div>

            </form>
        </div>
    );
}
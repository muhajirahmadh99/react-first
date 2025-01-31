const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-2  m-4">Contact us page</h1>
      <form className="flex">
        <input
          className="border border-black p-2 m-2"
          placeholder="name"
          type="text"
        />
        <input
          className="border border-black p-2 m-2"
          placeholder="password"
          type="text"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black  p-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="message"
          className="border border-black  p-2 m-2"
        ></input>
        <button className="border border-blue-500 p-2 m-2 rounded-lg bg-blue-300 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

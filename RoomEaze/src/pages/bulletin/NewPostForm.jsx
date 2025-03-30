const NewPostForm = () => {
  return (
    <div>
      <form>
        <input type="textarea" placeholder="Type your message here..." />
        <h3>Categories</h3>
        <label>
          <input type="radio" name="option" value="Request" /> Request
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="Reminder" /> Reminder
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="Notice" /> Notice
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="Random " /> Random
        </label>
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;

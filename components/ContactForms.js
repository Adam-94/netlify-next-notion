export default function ContactForm() {
  return (
    <form name="contact" action="/" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  );
}
